/**
 * Rate limiting system for AI requests
 * Protects against abuse while allowing legitimate D&D usage
 */

import { type AIModel } from "./settings";

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  // Daily limits per user
  maxRequestsPerUser: 30, // Per day
  maxTokensPerRequest: 2000, // Limit response size
  
  // Allowed prompt keywords (D&D related only)
  allowedKeywords: [
    'dnd', 'dungeons', 'dragons', 'd&d', '5e', 'fifth edition',
    'creature', 'monster', 'encounter', 'combat', 'initiative',
    'goblin', 'orc', 'dragon', 'troll', 'kobold', 'skeleton',
    'zombie', 'vampire', 'werewolf', 'demon', 'devil', 'angel',
    'paladin', 'wizard', 'rogue', 'fighter', 'cleric', 'bard',
    'ranger', 'barbarian', 'sorcerer', 'warlock', 'druid',
    'spell', 'magic', 'weapon', 'armor', 'treasure', 'loot',
    'quest', 'adventure', 'dungeon', 'cave', 'forest', 'mountain',
    'tavern', 'inn', 'castle', 'tower', 'temple', 'ruins',
    'party', 'character', 'npc', 'dm', 'gm', 'dungeon master',
    'roll', 'dice', 'hp', 'hit points', 'ac', 'armor class',
    'initiative', 'turn', 'round', 'action', 'bonus action',
    'reaction', 'movement', 'speed', 'attack', 'damage',
    'save', 'saving throw', 'skill', 'ability', 'stat',
    'level', 'experience', 'xp', 'cr', 'challenge rating'
  ],
  
  // Blocked keywords (non-D&D content)
  blockedKeywords: [
    'hack', 'crack', 'exploit', 'bypass', 'test', 'debug',
    'api', 'key', 'token', 'secret', 'password', 'admin',
    'system', 'server', 'database', 'sql', 'injection',
    'malware', 'virus', 'phishing', 'scam', 'fraud',
    'porn', 'adult', 'nsfw', 'explicit', 'inappropriate'
  ]
};

// Rate limiter class
class RateLimiter {
  private requests: Map<string, { count: number; lastReset: number }> = new Map();
  private readonly userKey: string;

  constructor() {
    // Create a unique user key based on browser fingerprint
    this.userKey = this.generateUserKey();
  }

  /**
   * Generate a unique user key for rate limiting
   */
  private generateUserKey(): string {
    try {
      // Create a fingerprint based on browser characteristics
      const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        // Add some randomness to prevent collision
        Math.random().toString(36).substring(2, 15)
      ].join('|');
      
      // Create a hash-like key
      return btoa(fingerprint).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32);
    } catch (error) {
      // Fallback to a simple key if fingerprinting fails
      return 'user_' + Math.random().toString(36).substring(2, 15);
    }
  }

  /**
   * Check if user can make a request
   */
  canMakeRequest(): boolean {
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;
    
    const userData = this.requests.get(this.userKey);
    
    // Reset if it's been more than a day
    if (!userData || (now - userData.lastReset) > dayInMs) {
      this.requests.set(this.userKey, { count: 0, lastReset: now });
      return true;
    }
    
    // Check if under limit
    return userData.count < RATE_LIMIT_CONFIG.maxRequestsPerUser;
  }

  /**
   * Record a request
   */
  recordRequest(): void {
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;
    
    const userData = this.requests.get(this.userKey);
    
    if (!userData || (now - userData.lastReset) > dayInMs) {
      this.requests.set(this.userKey, { count: 1, lastReset: now });
    } else {
      userData.count++;
      this.requests.set(this.userKey, userData);
    }
  }

  /**
   * Get current usage stats
   */
  getUsageStats(): {
    requestsUsed: number;
    requestsRemaining: number;
    resetTime: number;
    canMakeRequest: boolean;
  } {
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;
    
    const userData = this.requests.get(this.userKey);
    
    if (!userData || (now - userData.lastReset) > dayInMs) {
      return {
        requestsUsed: 0,
        requestsRemaining: RATE_LIMIT_CONFIG.maxRequestsPerUser,
        resetTime: now + dayInMs,
        canMakeRequest: true
      };
    }
    
    return {
      requestsUsed: userData.count,
      requestsRemaining: Math.max(0, RATE_LIMIT_CONFIG.maxRequestsPerUser - userData.count),
      resetTime: userData.lastReset + dayInMs,
      canMakeRequest: userData.count < RATE_LIMIT_CONFIG.maxRequestsPerUser
    };
  }

  /**
   * Get time until reset (in hours)
   */
  getTimeUntilReset(): number {
    const stats = this.getUsageStats();
    const now = Date.now();
    const msUntilReset = stats.resetTime - now;
    return Math.max(0, msUntilReset / (1000 * 60 * 60)); // Convert to hours
  }
}

// Singleton instance
const rateLimiter = new RateLimiter();

/**
 * Validate if a prompt is D&D related
 */
export function validatePrompt(prompt: string): {
  isValid: boolean;
  reason?: string;
} {
  const lowerPrompt = prompt.toLowerCase();
  
  // Check for blocked keywords
  const hasBlockedKeyword = RATE_LIMIT_CONFIG.blockedKeywords.some(keyword => 
    lowerPrompt.includes(keyword)
  );
  
  if (hasBlockedKeyword) {
    return {
      isValid: false,
      reason: 'Prompt contains blocked content. Please keep prompts D&D related.'
    };
  }
  
  // Check for allowed keywords
  const hasAllowedKeyword = RATE_LIMIT_CONFIG.allowedKeywords.some(keyword => 
    lowerPrompt.includes(keyword)
  );
  
  if (!hasAllowedKeyword) {
    return {
      isValid: false,
      reason: 'Prompt must be D&D related. Please include terms like "creature", "monster", "encounter", "dnd", etc.'
    };
  }
  
  return { isValid: true };
}

/**
 * Check if user can make a request
 */
export function canMakeRequest(): boolean {
  return rateLimiter.canMakeRequest();
}

/**
 * Record a request
 */
export function recordRequest(): void {
  rateLimiter.recordRequest();
}

/**
 * Get usage statistics
 */
export function getUsageStats() {
  return rateLimiter.getUsageStats();
}

/**
 * Get time until reset
 */
export function getTimeUntilReset(): number {
  return rateLimiter.getTimeUntilReset();
}

/**
 * Validate request before processing
 */
export function validateRequest(prompt: string, model: AIModel): {
  canProceed: boolean;
  error?: string;
  usageStats?: any;
} {
  // Validate prompt
  const promptValidation = validatePrompt(prompt);
  if (!promptValidation.isValid) {
    return {
      canProceed: false,
      error: promptValidation.reason
    };
  }
  
  // Check rate limit (only for Groq since it's free)
  if (model === 'groq') {
    if (!canMakeRequest()) {
      const stats = getUsageStats();
      const hoursUntilReset = getTimeUntilReset();
      
      return {
        canProceed: false,
        error: `Daily limit reached (${stats.requestsUsed}/${RATE_LIMIT_CONFIG.maxRequestsPerUser}). Please try again in ${hoursUntilReset.toFixed(1)} hours.`,
        usageStats: stats
      };
    }
  }
  
  return {
    canProceed: true,
    usageStats: getUsageStats()
  };
}

/**
 * Get rate limit configuration for display
 */
export function getRateLimitConfig() {
  return {
    maxRequestsPerUser: RATE_LIMIT_CONFIG.maxRequestsPerUser,
    maxTokensPerRequest: RATE_LIMIT_CONFIG.maxTokensPerRequest,
    allowedKeywords: RATE_LIMIT_CONFIG.allowedKeywords.slice(0, 10), // Show first 10
    totalAllowedKeywords: RATE_LIMIT_CONFIG.allowedKeywords.length
  };
}