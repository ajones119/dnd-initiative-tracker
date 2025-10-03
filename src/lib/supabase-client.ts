/**
 * Supabase client configuration
 * Handles rate limiting and API proxying
 */

import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase not configured. Falling back to client-side rate limiting.');
}

// Create Supabase client
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  maxRequestsPerIP: 30, // Per day
  maxTokensPerRequest: 2000,
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
  blockedKeywords: [
    'hack', 'crack', 'exploit', 'bypass', 'test', 'debug',
    'api', 'key', 'token', 'secret', 'password', 'admin',
    'system', 'server', 'database', 'sql', 'injection',
    'malware', 'virus', 'phishing', 'scam', 'fraud',
    'porn', 'adult', 'nsfw', 'explicit', 'inappropriate'
  ]
};

/**
 * Get user's IP address
 */
export async function getUserIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Failed to get IP address:', error);
    return '127.0.0.1'; // Fallback for localhost
  }
}

/**
 * Validate prompt content
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
 * Check rate limit for IP address
 */
export async function checkRateLimit(ipAddress: string): Promise<{
  allowed: boolean;
  requestsUsed: number;
  requestsRemaining: number;
  resetTime: string;
}> {
  if (!supabase) {
    // Fallback to client-side rate limiting
    return {
      allowed: true,
      requestsUsed: 0,
      requestsRemaining: RATE_LIMIT_CONFIG.maxRequestsPerIP,
      resetTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  }

  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Get current rate limit data
    const { data, error } = await supabase
      .from('rate_limits')
      .select('*')
      .eq('ip_address', ipAddress)
      .gte('created_at', `${today}T00:00:00.000Z`)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('Rate limit check error:', error);
      return {
        allowed: true, // Allow on error to prevent blocking legitimate users
        requestsUsed: 0,
        requestsRemaining: RATE_LIMIT_CONFIG.maxRequestsPerIP,
        resetTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      };
    }

    const requestsUsed = data?.requests_count || 0;
    const allowed = requestsUsed < RATE_LIMIT_CONFIG.maxRequestsPerIP;
    const requestsRemaining = Math.max(0, RATE_LIMIT_CONFIG.maxRequestsPerIP - requestsUsed);
    
    // Reset time is next midnight
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    return {
      allowed,
      requestsUsed,
      requestsRemaining,
      resetTime: tomorrow.toISOString()
    };
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return {
      allowed: true,
      requestsUsed: 0,
      requestsRemaining: RATE_LIMIT_CONFIG.maxRequestsPerIP,
      resetTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  }
}

/**
 * Record a request
 */
export async function recordRequest(ipAddress: string, userAgent: string, prompt: string, model: string): Promise<void> {
  if (!supabase) return;

  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Upsert rate limit record
    const { error: rateLimitError } = await supabase
      .from('rate_limits')
      .upsert({
        ip_address: ipAddress,
        user_agent: userAgent,
        requests_count: 1,
        last_request_at: new Date().toISOString(),
        created_at: `${today}T00:00:00.000Z`
      }, {
        onConflict: 'ip_address,created_at',
        ignoreDuplicates: false
      });

    if (rateLimitError) {
      console.error('Rate limit record error:', rateLimitError);
    }

    // Log the request
    const { error: logError } = await supabase
      .from('request_logs')
      .insert({
        ip_address: ipAddress,
        user_agent: userAgent,
        prompt: prompt.substring(0, 500), // Limit prompt length
        model: model,
        created_at: new Date().toISOString()
      });

    if (logError) {
      console.error('Request log error:', logError);
    }
  } catch (error) {
    console.error('Failed to record request:', error);
  }
}

/**
 * Get usage statistics for an IP
 */
export async function getUsageStats(ipAddress: string): Promise<{
  requestsUsed: number;
  requestsRemaining: number;
  resetTime: string;
  canMakeRequest: boolean;
}> {
  const rateLimit = await checkRateLimit(ipAddress);
  
  return {
    requestsUsed: rateLimit.requestsUsed,
    requestsRemaining: rateLimit.requestsRemaining,
    resetTime: rateLimit.resetTime,
    canMakeRequest: rateLimit.allowed
  };
}