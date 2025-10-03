/**
 * Rate Limit Test Component
 * For testing rate limiting functionality (can be removed in production)
 */

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { validateRequest, getUsageStats, getTimeUntilReset, getRateLimitConfig } from '../lib/rate-limiter';
import { type AIModel } from '../lib/settings';

export const RateLimitTest: React.FC = () => {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [usageStats, setUsageStats] = useState<any>(null);

  const addResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const updateStats = () => {
    const stats = getUsageStats();
    setUsageStats(stats);
  };

  const testValidPrompt = () => {
    const validation = validateRequest("Create 3 goblins for a D&D encounter", "groq");
    addResult(`Valid D&D prompt: ${validation.canProceed ? '✅ Allowed' : '❌ Blocked'}`);
    if (!validation.canProceed) {
      addResult(`Reason: ${validation.error}`);
    }
    updateStats();
  };

  const testInvalidPrompt = () => {
    const validation = validateRequest("Tell me about hacking computers", "groq");
    addResult(`Invalid prompt: ${validation.canProceed ? '✅ Allowed' : '❌ Blocked'}`);
    if (!validation.canProceed) {
      addResult(`Reason: ${validation.error}`);
    }
    updateStats();
  };

  const testRateLimit = () => {
    const stats = getUsageStats();
    addResult(`Rate limit check: ${stats.canMakeRequest ? '✅ Can make request' : '❌ Rate limited'}`);
    addResult(`Usage: ${stats.requestsUsed}/${stats.requestsUsed + stats.requestsRemaining} requests`);
    updateStats();
  };

  const clearResults = () => {
    setTestResults([]);
  };

  const resetUsage = () => {
    // This would reset the rate limiter (for testing only)
    localStorage.removeItem('rate-limiter-data');
    addResult('Rate limiter reset (testing only)');
    updateStats();
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline">Rate Limit Test</Badge>
        <span className="text-sm text-gray-600">Testing component (remove in production)</span>
      </div>

      {/* Current Stats */}
      {usageStats && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <h4 className="font-medium text-blue-900 mb-2">Current Usage</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <div>Requests used: {usageStats.requestsUsed}</div>
            <div>Requests remaining: {usageStats.requestsRemaining}</div>
            <div>Can make request: {usageStats.canMakeRequest ? 'Yes' : 'No'}</div>
            <div>Time until reset: {getTimeUntilReset().toFixed(1)} hours</div>
          </div>
        </div>
      )}

      {/* Test Configuration */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <h4 className="font-medium text-green-900 mb-2">Rate Limit Config</h4>
        <div className="text-sm text-green-700 space-y-1">
          <div>Max requests per user: {getRateLimitConfig().maxRequestsPerUser}</div>
          <div>Max tokens per request: {getRateLimitConfig().maxTokensPerRequest}</div>
          <div>Total allowed keywords: {getRateLimitConfig().totalAllowedKeywords}</div>
        </div>
      </div>

      {/* Test Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={testValidPrompt} size="sm" variant="outline">
          Test Valid D&D Prompt
        </Button>
        <Button onClick={testInvalidPrompt} size="sm" variant="outline">
          Test Invalid Prompt
        </Button>
        <Button onClick={testRateLimit} size="sm" variant="outline">
          Check Rate Limit
        </Button>
        <Button onClick={resetUsage} size="sm" variant="destructive">
          Reset Usage (Test)
        </Button>
        <Button onClick={clearResults} size="sm" variant="secondary">
          Clear Results
        </Button>
      </div>

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <h4 className="font-medium text-gray-900 mb-2">Test Results</h4>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {testResults.map((result, index) => (
              <div key={index} className="text-sm text-gray-600 font-mono">
                {result}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};