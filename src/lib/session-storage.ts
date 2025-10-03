/**
 * Session storage for API keys
 * More secure than localStorage as data is cleared when tab closes
 */

import { type AIModel } from "./settings";
import { encryptForStorage, decryptFromStorage } from "./encryption";

export interface SessionApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

const SESSION_STORAGE_KEY = "api_keys_session";

/**
 * Store API keys in sessionStorage with encryption
 */
export function storeApiKeysInSession(keys: SessionApiKeys): void {
  if (typeof sessionStorage === 'undefined') return;
  
  try {
    const encryptedKeys = encryptForStorage(keys);
    sessionStorage.setItem(SESSION_STORAGE_KEY, encryptedKeys);
  } catch (error) {
    console.error("Failed to store API keys in session:", error);
    throw new Error("Failed to store API keys in session storage");
  }
}

/**
 * Get API keys from sessionStorage
 */
export function getApiKeysFromSession(): SessionApiKeys {
  if (typeof sessionStorage === 'undefined') return {};
  
  try {
    const encryptedKeys = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!encryptedKeys) return {};
    
    return decryptFromStorage(encryptedKeys) || {};
  } catch (error) {
    console.error("Failed to retrieve API keys from session:", error);
    return {};
  }
}

/**
 * Clear API keys from sessionStorage
 */
export function clearApiKeysFromSession(): void {
  if (typeof sessionStorage === 'undefined') return;
  
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
}

/**
 * Check if session storage is configured
 */
export function isSessionStorageConfigured(): boolean {
  const keys = getApiKeysFromSession();
  return !!(keys.openaiApiKey || keys.geminiApiKey);
}

/**
 * Get the appropriate API key for the given model from session storage
 */
export function getSessionApiKey(model: AIModel): string {
  const keys = getApiKeysFromSession();
  
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
 * Get session storage status for debugging
 */
export function getSessionStorageStatus(): {
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  warning: string;
} {
  const keys = getApiKeysFromSession();
  const openaiConfigured = !!keys.openaiApiKey;
  const geminiConfigured = !!keys.geminiApiKey;
  
  return {
    configured: openaiConfigured || geminiConfigured,
    openaiConfigured,
    geminiConfigured,
    warning: "Session storage is cleared when browser tab closes, providing better security than localStorage."
  };
}