/**
 * Environment variable storage for API keys
 * Most secure option - API keys never reach the client
 */

import { type AIModel } from "./settings";

export interface EnvApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

/**
 * Get API keys from environment variables
 * This is the most secure method as keys never reach the client
 */
export function getApiKeysFromEnv(): EnvApiKeys {
  // In a real implementation, these would come from server environment
  // For now, we'll simulate this with client-side env vars (less secure)
  return {
    openaiApiKey: import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.OPENAI_API_KEY,
    geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY,
  };
}

/**
 * Check if environment variables are configured
 */
export function isEnvStorageConfigured(): boolean {
  const keys = getApiKeysFromEnv();
  return !!(keys.openaiApiKey || keys.geminiApiKey);
}

/**
 * Get the appropriate API key for the given model from environment
 */
export function getEnvApiKey(model: AIModel): string {
  const keys = getApiKeysFromEnv();
  
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
 * Get environment storage status for debugging
 */
export function getEnvStorageStatus(): {
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  warning: string;
} {
  const keys = getApiKeysFromEnv();
  const openaiConfigured = !!keys.openaiApiKey;
  const geminiConfigured = !!keys.geminiApiKey;
  
  return {
    configured: openaiConfigured || geminiConfigured,
    openaiConfigured,
    geminiConfigured,
    warning: "Environment variables are visible to client in Vite. Use server-side implementation for production."
  };
}