// API Configuration and Usage Monitoring
export const API_CONFIG = {
  // Gemini API Configuration
  GEMINI: {
    model: "gemini-1.5-pro",
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 30000,
    backoffMultiplier: 2
  },
  
  // Rate Limiting Configuration
  RATE_LIMIT: {
    windowMs: 60000, // 1 minute
    maxRequests: 10, // Max requests per window per IP
    cleanupInterval: 300000 // 5 minutes
  },
  
  // Quota Management
  QUOTA: {
    // Free tier limits (approximate)
    freeTier: {
      requestsPerMinute: 15,
      requestsPerDay: 1500,
      tokensPerMinute: 32000
    },
    
    // Recommended limits to stay under quota
    recommended: {
      requestsPerMinute: 10,
      requestsPerDay: 1000,
      tokensPerMinute: 25000
    }
  }
};

// Usage tracking (in production, use a proper database)
const usageTracker = {
  requests: new Map(),
  tokens: new Map(),
  lastCleanup: Date.now()
};

// Clean up old usage data
function cleanupUsageData() {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  
  for (const [key, data] of usageTracker.requests.entries()) {
    if (now - data.timestamp > oneHour) {
      usageTracker.requests.delete(key);
    }
  }
  
  for (const [key, data] of usageTracker.tokens.entries()) {
    if (now - data.timestamp > oneHour) {
      usageTracker.tokens.delete(key);
    }
  }
  
  usageTracker.lastCleanup = now;
}

// Track API usage
export function trackUsage(ip, tokens = 0) {
  const now = Date.now();
  const minute = Math.floor(now / 60000);
  const day = Math.floor(now / (24 * 60 * 60 * 1000));
  
  // Track requests per minute
  const requestKey = `${ip}-${minute}`;
  const requestData = usageTracker.requests.get(requestKey) || { count: 0, timestamp: now };
  requestData.count++;
  usageTracker.requests.set(requestKey, requestData);
  
  // Track tokens per minute
  if (tokens > 0) {
    const tokenKey = `${ip}-${minute}`;
    const tokenData = usageTracker.tokens.get(tokenKey) || { count: 0, timestamp: now };
    tokenData.count += tokens;
    usageTracker.tokens.set(tokenKey, tokenData);
  }
  
  // Cleanup old data periodically
  if (now - usageTracker.lastCleanup > API_CONFIG.RATE_LIMIT.cleanupInterval) {
    cleanupUsageData();
  }
}

// Get current usage for an IP
export function getUsage(ip) {
  const now = Date.now();
  const minute = Math.floor(now / 60000);
  
  const requestKey = `${ip}-${minute}`;
  const tokenKey = `${ip}-${minute}`;
  
  const requests = usageTracker.requests.get(requestKey)?.count || 0;
  const tokens = usageTracker.tokens.get(tokenKey)?.count || 0;
  
  return {
    requestsPerMinute: requests,
    tokensPerMinute: tokens,
    isNearLimit: requests >= API_CONFIG.QUOTA.recommended.requestsPerMinute * 0.8
  };
}

// Check if usage is within limits
export function isWithinLimits(ip) {
  const usage = getUsage(ip);
  return usage.requestsPerMinute < API_CONFIG.QUOTA.recommended.requestsPerMinute;
}

// Get quota status
export function getQuotaStatus() {
  return {
    freeTier: API_CONFIG.QUOTA.freeTier,
    recommended: API_CONFIG.QUOTA.recommended,
    currentUsage: {
      totalRequests: usageTracker.requests.size,
      totalTokens: Array.from(usageTracker.tokens.values())
        .reduce((sum, data) => sum + data.count, 0)
    }
  };
}
