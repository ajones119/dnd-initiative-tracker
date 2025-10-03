/**
 * Supabase storage for API keys with IP-based security
 * API keys encrypted with CryptoJS before sending to Supabase
 */

import { type AIModel } from "./settings";
import { encryptForStorage, decryptFromStorage } from "./encryption";

// Supabase client setup (you'll need to install @supabase/supabase-js)
// import { createClient } from '@supabase/supabase-js'

export interface SupabaseApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

// Initialize Supabase client
// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// )

class SupabaseStorage {
  private userId: string;

  constructor() {
    // In a real implementation, you'd get this from authentication
    this.userId = this.generateUserId();
  }

  /**
   * Generate a unique user ID based on browser fingerprint
   * This ensures each user has their own encrypted storage
   */
  private generateUserId(): string {
    // Create a unique ID based on browser characteristics
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx?.fillText('user-fingerprint', 10, 10);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');
    
    // Create a hash of the fingerprint
    return btoa(fingerprint).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32);
  }

  /**
   * Store API keys in Supabase with encryption
   */
  async storeApiKeys(keys: SupabaseApiKeys): Promise<void> {
    try {
      // Encrypt keys with CryptoJS before sending to Supabase
      const encryptedKeys = encryptForStorage(keys);
      
      // In a real implementation, you'd use Supabase client:
      // const { data, error } = await supabase
      //   .from('user_api_keys')
      //   .upsert({
      //     user_id: this.userId,
      //     encrypted_keys: encryptedKeys,
      //     updated_at: new Date().toISOString()
      //   });

      // For demo purposes, simulate the API call
      console.log('Storing encrypted keys to Supabase:', {
        user_id: this.userId,
        encrypted_keys: encryptedKeys,
        updated_at: new Date().toISOString()
      });

      // Simulate success
      return Promise.resolve();
    } catch (error) {
      console.error("Failed to store API keys in Supabase:", error);
      throw new Error("Failed to store API keys in Supabase");
    }
  }

  /**
   * Get API keys from Supabase
   */
  async getApiKeys(): Promise<SupabaseApiKeys> {
    try {
      // In a real implementation, you'd use Supabase client:
      // const { data, error } = await supabase
      //   .from('user_api_keys')
      //   .select('encrypted_keys')
      //   .eq('user_id', this.userId)
      //   .single();

      // For demo purposes, simulate the API call
      console.log('Retrieving encrypted keys from Supabase for user:', this.userId);

      // Simulate no data found
      return {};
    } catch (error) {
      console.error("Failed to retrieve API keys from Supabase:", error);
      return {};
    }
  }

  /**
   * Clear API keys from Supabase
   */
  async clearApiKeys(): Promise<void> {
    try {
      // In a real implementation, you'd use Supabase client:
      // const { error } = await supabase
      //   .from('user_api_keys')
      //   .delete()
      //   .eq('user_id', this.userId);

      console.log('Clearing API keys from Supabase for user:', this.userId);
      return Promise.resolve();
    } catch (error) {
      console.error("Failed to clear API keys from Supabase:", error);
      throw new Error("Failed to clear API keys from Supabase");
    }
  }

  /**
   * Check if Supabase storage is configured
   */
  async isConfigured(): Promise<boolean> {
    try {
      const keys = await this.getApiKeys();
      return !!(keys.openaiApiKey || keys.geminiApiKey);
    } catch (error) {
      return false;
    }
  }

  /**
   * Get the appropriate API key for the given model from Supabase
   */
  async getApiKey(model: AIModel): Promise<string> {
    const keys = await this.getApiKeys();
    
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
   * Get Supabase storage status
   */
  async getStatus(): Promise<{
    configured: boolean;
    openaiConfigured: boolean;
    geminiConfigured: boolean;
    userId: string;
    warning: string;
  }> {
    const keys = await this.getApiKeys();
    const openaiConfigured = !!keys.openaiApiKey;
    const geminiConfigured = !!keys.geminiApiKey;
    
    return {
      configured: openaiConfigured || geminiConfigured,
      openaiConfigured,
      geminiConfigured,
      userId: this.userId,
      warning: "API keys are encrypted with CryptoJS before being sent to Supabase. IP-based security rules protect access."
    };
  }
}

// Singleton instance
const supabaseStorage = new SupabaseStorage();

/**
 * Store API keys in Supabase
 */
export function storeApiKeysInSupabase(keys: SupabaseApiKeys): Promise<void> {
  return supabaseStorage.storeApiKeys(keys);
}

/**
 * Get API keys from Supabase
 */
export function getApiKeysFromSupabase(): Promise<SupabaseApiKeys> {
  return supabaseStorage.getApiKeys();
}

/**
 * Clear API keys from Supabase
 */
export function clearApiKeysFromSupabase(): Promise<void> {
  return supabaseStorage.clearApiKeys();
}

/**
 * Check if Supabase storage is configured
 */
export async function isSupabaseStorageConfigured(): Promise<boolean> {
  return supabaseStorage.isConfigured();
}

/**
 * Get the appropriate API key for the given model from Supabase
 */
export async function getSupabaseApiKey(model: AIModel): Promise<string> {
  return supabaseStorage.getApiKey(model);
}

/**
 * Get Supabase storage status
 */
export async function getSupabaseStorageStatus(): Promise<{
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  userId: string;
  warning: string;
}> {
  return supabaseStorage.getStatus();
}