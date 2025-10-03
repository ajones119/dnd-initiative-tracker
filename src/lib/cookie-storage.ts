/**
 * HTTP-only secure cookie storage for API keys
 * Cookies are more secure than localStorage as they can be httpOnly
 */

import { type AIModel } from "./settings";

export interface CookieApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

/**
 * Cookie storage options for security
 */
const COOKIE_OPTIONS = {
  httpOnly: false, // Set to true in server-side implementation
  secure: true, // Only over HTTPS
  sameSite: 'strict' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: '/'
};

/**
 * Set a secure cookie with API key
 */
export function setApiKeyCookie(keyName: string, value: string): void {
  if (typeof document === 'undefined') return;
  
  // In production, this should be done server-side with httpOnly: true
  const cookieString = `${keyName}=${encodeURIComponent(value)}; ${Object.entries(COOKIE_OPTIONS)
    .filter(([_, val]) => val !== false)
    .map(([key, val]) => `${key}=${val}`)
    .join('; ')}`;
    
  document.cookie = cookieString;
}

/**
 * Get API key from cookie
 */
export function getApiKeyFromCookie(keyName: string): string {
  if (typeof document === 'undefined') return '';
  
  const cookies = document.cookie.split(';');
  const cookie = cookies.find(c => c.trim().startsWith(`${keyName}=`));
  
  if (!cookie) return '';
  
  return decodeURIComponent(cookie.split('=')[1]);
}

/**
 * Remove API key cookie
 */
export function removeApiKeyCookie(keyName: string): void {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${keyName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Store API keys in secure cookies
 */
export function storeApiKeysInCookies(keys: CookieApiKeys): void {
  if (keys.openaiApiKey) {
    setApiKeyCookie('openai_api_key', keys.openaiApiKey);
  }
  if (keys.geminiApiKey) {
    setApiKeyCookie('gemini_api_key', keys.geminiApiKey);
  }
}

/**
 * Get all API keys from cookies
 */
export function getApiKeysFromCookies(): CookieApiKeys {
  return {
    openaiApiKey: getApiKeyFromCookie('openai_api_key'),
    geminiApiKey: getApiKeyFromCookie('gemini_api_key'),
  };
}

/**
 * Clear all API key cookies
 */
export function clearApiKeyCookies(): void {
  removeApiKeyCookie('openai_api_key');
  removeApiKeyCookie('gemini_api_key');
}

/**
 * Check if cookie storage is configured
 */
export function isCookieStorageConfigured(): boolean {
  const keys = getApiKeysFromCookies();
  return !!(keys.openaiApiKey || keys.geminiApiKey);
}

/**
 * Get the appropriate API key for the given model from cookies
 */
export function getCookieApiKey(model: AIModel): string {
  const keys = getApiKeysFromCookies();
  
  switch (model) {
    case "openai":
      return keys.openaiApiKey || "";
    case "gemini":
      return keys.geminiApiKey || "";
    default:
      return "";
  }
}

/**
 * Get cookie storage status for debugging
 */
export function getCookieStorageStatus(): {
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  warning: string;
} {
  const keys = getApiKeysFromCookies();
  const openaiConfigured = !!keys.openaiApiKey;
  const geminiConfigured = !!keys.geminiApiKey;
  
  return {
    configured: openaiConfigured || geminiConfigured,
    openaiConfigured,
    geminiConfigured,
    warning: "Client-side cookies are visible to JavaScript. Use server-side httpOnly cookies for maximum security."
  };
}