import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create conversation context
    const systemPrompt = `You are Rockai, an AI assistant for Rockai Dev, a technology company specializing in AI solutions, web development, and digital innovation. 

Your role is to:
- Help users with questions about our services (AI development, web development, mobile apps, etc.)
- Provide information about our products and solutions
- Assist with sales inquiries and business development
- Offer technical guidance and best practices
- Be friendly, professional, and helpful

Company context:
- We build AI-powered solutions
- We offer web and mobile development services
- We help businesses scale with technology
- We focus on innovation and cutting-edge solutions

Keep responses concise, helpful, and professional. If you don't know something specific about our company, politely say so and offer to connect them with our team.`;

    // Build conversation history for context
    let conversationContext = systemPrompt + "\n\nConversation History:\n";
    
    if (conversationHistory.length > 0) {
      conversationHistory.forEach(msg => {
        conversationContext += `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}\n`;
      });
    }
    
    conversationContext += `\nUser: ${message}\nAssistant:`;

    // Generate response
    const result = await model.generateContent(conversationContext);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      message: text,
      success: true
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Handle specific Gemini API errors
    if (error.message?.includes('API_KEY_INVALID')) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your Gemini API configuration.' },
        { status: 401 }
      );
    }
    
    if (error.message?.includes('QUOTA_EXCEEDED')) {
      return NextResponse.json(
        { error: 'API quota exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
