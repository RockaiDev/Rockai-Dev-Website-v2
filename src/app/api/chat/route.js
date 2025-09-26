import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { detectLanguage, getSystemPrompt } from '@/lib/languageUtils';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Rate limiting and retry configuration
const RATE_LIMIT_CONFIG = {
  maxRetries: 3,
  baseDelay: 1000, // 1 second
  maxDelay: 30000, // 30 seconds
  backoffMultiplier: 2
};

// Simple in-memory rate limiter (in production, use Redis or similar)
const rateLimiter = new Map();

// Circuit breaker for quota exceeded errors
const circuitBreaker = {
  failures: 0,
  lastFailureTime: 0,
  isOpen: false,
  threshold: 3, // Open circuit after 3 consecutive failures (more reasonable)
  timeout: 300000 // 5 minutes timeout (shorter for faster recovery)
};

// Fallback responses for when API is unavailable
const FALLBACK_RESPONSES = {
  en: "I'm currently experiencing high demand and my AI service is temporarily unavailable. Please try again in a few minutes, or feel free to contact us directly for immediate assistance.",
  es: "Actualmente estoy experimentando una alta demanda y mi servicio de IA no está disponible temporalmente. Por favor, inténtalo de nuevo en unos minutos, o no dudes en contactarnos directamente para asistencia inmediata.",
  fr: "Je connais actuellement une forte demande et mon service d'IA est temporairement indisponible. Veuillez réessayer dans quelques minutes, ou n'hésitez pas à nous contacter directement pour une assistance immédiate.",
  de: "Ich erlebe derzeit eine hohe Nachfrage und mein KI-Service ist vorübergehend nicht verfügbar. Bitte versuchen Sie es in ein paar Minuten erneut, oder kontaktieren Sie uns direkt für sofortige Hilfe.",
  it: "Sto attualmente riscontrando un'alta domanda e il mio servizio AI è temporaneamente non disponibile. Riprova tra qualche minuto, o non esitare a contattarci direttamente per assistenza immediata.",
  pt: "Atualmente estou enfrentando alta demanda e meu serviço de IA está temporariamente indisponível. Tente novamente em alguns minutos, ou sinta-se à vontade para nos contatar diretamente para assistência imediata.",
  default: "I'm currently experiencing high demand and my AI service is temporarily unavailable. Please try again in a few minutes, or feel free to contact us directly for immediate assistance."
};

// Helper function to check rate limits
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60000; // 1 minute window
  const maxRequests = 15; // Max 15 requests per minute per IP (more user-friendly)
  
  if (!rateLimiter.has(ip)) {
    rateLimiter.set(ip, []);
  }
  
  const requests = rateLimiter.get(ip);
  const validRequests = requests.filter(time => now - time < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return false;
  }
  
  validRequests.push(now);
  rateLimiter.set(ip, validRequests);
  return true;
}

// Helper function to sleep/delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to calculate retry delay with exponential backoff
function calculateRetryDelay(attempt) {
  const delay = Math.min(
    RATE_LIMIT_CONFIG.baseDelay * Math.pow(RATE_LIMIT_CONFIG.backoffMultiplier, attempt),
    RATE_LIMIT_CONFIG.maxDelay
  );
  return delay + Math.random() * 1000; // Add jitter
}

// Helper function to extract retry delay from error message
function extractRetryDelay(errorMessage) {
  const retryMatch = errorMessage.match(/Please retry in (\d+(?:\.\d+)?)s/);
  if (retryMatch) {
    return parseFloat(retryMatch[1]) * 1000; // Convert to milliseconds
  }
  return null;
}

// Helper function to get fallback response
function getFallbackResponse(language) {
  return FALLBACK_RESPONSES[language] || FALLBACK_RESPONSES.default;
}

// Circuit breaker functions
function isCircuitOpen() {
  const now = Date.now();
  
  // Reset circuit if timeout has passed
  if (circuitBreaker.isOpen && (now - circuitBreaker.lastFailureTime) > circuitBreaker.timeout) {
    circuitBreaker.isOpen = false;
    circuitBreaker.failures = 0;
    console.log('Circuit breaker reset - attempting to reconnect to API');
  }
  
  return circuitBreaker.isOpen;
}

function recordFailure() {
  circuitBreaker.failures++;
  circuitBreaker.lastFailureTime = Date.now();
  
  console.log(`Circuit breaker failure count: ${circuitBreaker.failures}/${circuitBreaker.threshold}`);
  
  if (circuitBreaker.failures >= circuitBreaker.threshold) {
    circuitBreaker.isOpen = true;
    console.log(`Circuit breaker opened after ${circuitBreaker.failures} consecutive failures`);
  }
}

function recordSuccess() {
  circuitBreaker.failures = 0;
  circuitBreaker.isOpen = false;
  console.log('Circuit breaker reset - API is working normally');
}

// GET endpoint for circuit breaker status
export async function GET() {
  return NextResponse.json({
    circuitBreaker: {
      isOpen: circuitBreaker.isOpen,
      failures: circuitBreaker.failures,
      threshold: circuitBreaker.threshold,
      lastFailureTime: circuitBreaker.lastFailureTime,
      timeUntilReset: circuitBreaker.isOpen ? 
        Math.max(0, circuitBreaker.timeout - (Date.now() - circuitBreaker.lastFailureTime)) : 0
    },
    rateLimiter: {
      activeIPs: rateLimiter.size
    }
  });
}

export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limits
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please slow down and try again.' },
        { status: 429 }
      );
    }

    // Detect language from user message (needed for fallback responses)
    const detectedLanguage = detectLanguage(message);

    // Check circuit breaker
    if (isCircuitOpen()) {
      console.log('Circuit breaker is open - returning fallback response');
      return NextResponse.json({
        message: getFallbackResponse(detectedLanguage),
        language: detectedLanguage,
        success: true,
        fallback: true,
        circuitBreaker: true
      });
    }
    
    // Get appropriate system prompt based on detected language
    const systemPrompt = getSystemPrompt(detectedLanguage);

    // Build conversation history for context
    let conversationContext = systemPrompt + "\n\nConversation History:\n";

    if (conversationHistory.length > 0) {
      conversationHistory.forEach(msg => {
        conversationContext += `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}\n`;
      });
    }

    conversationContext += `\nUser: ${message}\nAssistant:`;

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    // Retry logic with exponential backoff
    let lastError;
    for (let attempt = 0; attempt <= RATE_LIMIT_CONFIG.maxRetries; attempt++) {
      // Check circuit breaker before each attempt
      if (isCircuitOpen()) {
        console.log('Circuit breaker is open during retry - returning fallback response');
        return NextResponse.json({
          message: getFallbackResponse(detectedLanguage),
          language: detectedLanguage,
          success: true,
          fallback: true,
          circuitBreaker: true
        });
      }

      try {
        // Generate response
        const result = await model.generateContent(conversationContext);
        const response = await result.response;
        const text = response.text();

        // Record successful API call
        recordSuccess();

        return NextResponse.json({
          message: text,
          language: detectedLanguage,
          success: true
        });

      } catch (error) {
        lastError = error;
        console.error(`Chat API Error (attempt ${attempt + 1}):`, error);

        // Check if it's a quota exceeded error
        if (error.message?.includes('quota') || error.message?.includes('429')) {
          // Record failure for circuit breaker
          recordFailure();
          
          // Extract retry delay from error message if available
          const retryDelay = extractRetryDelay(error.message);
          
          // For quota exceeded errors, always return fallback immediately to avoid long waits
          console.log(`Quota exceeded (retry delay: ${retryDelay ? Math.ceil(retryDelay / 1000) + 's' : 'unknown'}), returning fallback response immediately`);
          return NextResponse.json({
            message: getFallbackResponse(detectedLanguage),
            language: detectedLanguage,
            success: true,
            fallback: true,
            retryAfter: retryDelay ? Math.ceil(retryDelay / 1000) : null
          });
        }

        // For other errors, don't retry
        break;
      }
    }

    // Handle specific Gemini API errors
    if (lastError?.message?.includes('API_KEY_INVALID')) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your Gemini API configuration.' },
        { status: 401 }
      );
    }

    if (lastError?.message?.includes('quota') || lastError?.message?.includes('429')) {
      return NextResponse.json({
        message: getFallbackResponse(detectedLanguage),
        language: detectedLanguage,
        success: true,
        fallback: true
      });
    }

    // For other errors, return fallback response
    return NextResponse.json({
      message: getFallbackResponse(detectedLanguage),
      language: detectedLanguage,
      success: true,
      fallback: true
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
