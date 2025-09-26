'use client';

import { useState, useEffect } from 'react';

export default function ApiUsageDashboard() {
  const [usage, setUsage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you'd fetch this from your API
    // For now, we'll simulate the data
    const fetchUsage = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - replace with actual API call
        setUsage({
          requestsPerMinute: 8,
          tokensPerMinute: 15000,
          isNearLimit: false,
          quotaStatus: {
            freeTier: {
              requestsPerMinute: 15,
              requestsPerDay: 1500,
              tokensPerMinute: 32000
            },
            recommended: {
              requestsPerMinute: 10,
              requestsPerDay: 1000,
              tokensPerMinute: 25000
            }
          }
        });
      } catch (error) {
        console.error('Failed to fetch usage data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsage();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchUsage, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!usage) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">API Usage Dashboard</h3>
        <p className="text-red-600">Failed to load usage data</p>
      </div>
    );
  }

  const requestPercentage = (usage.requestsPerMinute / usage.quotaStatus.recommended.requestsPerMinute) * 100;
  const tokenPercentage = (usage.tokensPerMinute / usage.quotaStatus.recommended.tokensPerMinute) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">API Usage Dashboard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Requests per minute */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">Requests per minute</span>
            <span className={`text-sm font-semibold ${
              usage.isNearLimit ? 'text-orange-600' : 'text-green-600'
            }`}>
              {usage.requestsPerMinute} / {usage.quotaStatus.recommended.requestsPerMinute}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                requestPercentage >= 80 ? 'bg-red-500' : 
                requestPercentage >= 60 ? 'bg-orange-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(requestPercentage, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">
            Free tier limit: {usage.quotaStatus.freeTier.requestsPerMinute}/min
          </p>
        </div>

        {/* Tokens per minute */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">Tokens per minute</span>
            <span className={`text-sm font-semibold ${
              tokenPercentage >= 80 ? 'text-orange-600' : 'text-green-600'
            }`}>
              {usage.tokensPerMinute.toLocaleString()} / {usage.quotaStatus.recommended.tokensPerMinute.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                tokenPercentage >= 80 ? 'bg-red-500' : 
                tokenPercentage >= 60 ? 'bg-orange-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(tokenPercentage, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">
            Free tier limit: {usage.quotaStatus.freeTier.tokensPerMinute.toLocaleString()}/min
          </p>
        </div>
      </div>

      {/* Status indicator */}
      <div className="mt-6 p-4 rounded-lg bg-gray-50">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-3 ${
            usage.isNearLimit ? 'bg-orange-500' : 'bg-green-500'
          }`}></div>
          <span className="text-sm text-gray-700">
            {usage.isNearLimit 
              ? 'Approaching rate limit - consider reducing request frequency'
              : 'API usage is within normal limits'
            }
          </span>
        </div>
      </div>

      {/* Recommendations */}
      {usage.isNearLimit && (
        <div className="mt-4 p-4 rounded-lg bg-orange-50 border border-orange-200">
          <h4 className="text-sm font-semibold text-orange-800 mb-2">Recommendations:</h4>
          <ul className="text-sm text-orange-700 space-y-1">
            <li>• Implement client-side caching to reduce API calls</li>
            <li>• Add delays between requests</li>
            <li>• Consider upgrading to a paid plan for higher limits</li>
            <li>• Monitor usage patterns and optimize conversation length</li>
          </ul>
        </div>
      )}
    </div>
  );
}
