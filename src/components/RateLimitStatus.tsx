/**
 * Rate Limit Status Component
 * Shows users their current usage and limits
 */

import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Clock, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { getUsageStats, getTimeUntilReset, getRateLimitConfig } from '../lib/rate-limiter';

interface RateLimitStatusProps {
  model: string;
  onStatusChange?: (status: any) => void;
}

export const RateLimitStatus: React.FC<RateLimitStatusProps> = ({
  model,
  onStatusChange,
}) => {
  const [usageStats, setUsageStats] = useState<any>(null);
  const [timeUntilReset, setTimeUntilReset] = useState<number>(0);
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const updateStats = () => {
      const stats = getUsageStats();
      const timeUntilReset = getTimeUntilReset();
      const config = getRateLimitConfig();
      
      setUsageStats(stats);
      setTimeUntilReset(timeUntilReset);
      setConfig(config);
      
      if (onStatusChange) {
        onStatusChange(stats);
      }
    };

    // Update stats immediately
    updateStats();

    // Update every minute
    const interval = setInterval(updateStats, 60000);

    return () => clearInterval(interval);
  }, [onStatusChange]);

  // Don't show for models that don't have rate limiting
  if (model !== 'groq') {
    return null;
  }

  if (!usageStats || !config) {
    return null;
  }

  const usagePercentage = (usageStats.requestsUsed / config.maxRequestsPerUser) * 100;
  const isNearLimit = usagePercentage >= 80;
  const isAtLimit = !usageStats.canMakeRequest;

  const getStatusColor = () => {
    if (isAtLimit) return 'text-red-600';
    if (isNearLimit) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusIcon = () => {
    if (isAtLimit) return <AlertTriangle className="h-4 w-4" />;
    if (isNearLimit) return <Clock className="h-4 w-4" />;
    return <CheckCircle className="h-4 w-4" />;
  };

  const getStatusText = () => {
    if (isAtLimit) return 'Limit reached';
    if (isNearLimit) return 'Near limit';
    return 'Good';
  };

  const formatTimeUntilReset = (hours: number) => {
    if (hours < 1) {
      const minutes = Math.round(hours * 60);
      return `${minutes}m`;
    } else if (hours < 24) {
      return `${Math.round(hours)}h`;
    } else {
      const days = Math.floor(hours / 24);
      const remainingHours = Math.round(hours % 24);
      return `${days}d ${remainingHours}h`;
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-500" />
          <span className="font-medium text-blue-900">Free AI Usage</span>
        </div>
        <Badge 
          variant={isAtLimit ? "destructive" : isNearLimit ? "secondary" : "default"}
          className={`text-xs ${getStatusColor()}`}
        >
          <div className="flex items-center gap-1">
            {getStatusIcon()}
            {getStatusText()}
          </div>
        </Badge>
      </div>

      <div className="space-y-3">
        {/* Usage Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-blue-700">
              {usageStats.requestsUsed} / {config.maxRequestsPerUser} requests used
            </span>
            <span className="text-blue-600">
              {usageStats.requestsRemaining} remaining
            </span>
          </div>
          <Progress 
            value={usagePercentage} 
            className="h-2"
            // @ts-ignore - Progress component might not have these props
            indicatorClassName={isAtLimit ? "bg-red-500" : isNearLimit ? "bg-yellow-500" : "bg-blue-500"}
          />
        </div>

        {/* Reset Timer */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-700">Resets in:</span>
          <span className="text-blue-600 font-medium">
            {formatTimeUntilReset(timeUntilReset)}
          </span>
        </div>

        {/* Usage Guidelines */}
        <div className="text-xs text-blue-600 bg-blue-100 rounded p-2">
          <strong>Usage Guidelines:</strong>
          <ul className="mt-1 space-y-1">
            <li>• Only D&D related prompts are allowed</li>
            <li>• {config.maxRequestsPerUser} requests per day limit</li>
            <li>• Perfect for D&D creature and encounter generation</li>
          </ul>
        </div>

        {/* Warning Messages */}
        {isAtLimit && (
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="font-medium text-red-800 text-sm">Daily Limit Reached</span>
            </div>
            <p className="text-red-700 text-xs">
              You've used all {config.maxRequestsPerUser} free requests for today. 
              Try again in {formatTimeUntilReset(timeUntilReset)} when your limit resets.
            </p>
          </div>
        )}

        {isNearLimit && !isAtLimit && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-yellow-500" />
              <span className="font-medium text-yellow-800 text-sm">Approaching Limit</span>
            </div>
            <p className="text-yellow-700 text-xs">
              You're using {usageStats.requestsUsed} of {config.maxRequestsPerUser} requests. 
              Consider saving some for later in the day.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};