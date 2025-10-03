/**
 * Supabase storage for API keys with IP-based security
 * API keys encrypted with CryptoJS before sending to Supabase
 */

import { type AIModel } from "./settings";
import { encryptForStorage, decryptFromStorage } from "./encryption";

import { createClient } from '@supabase/supabase-js';

export interface SupabaseApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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
   * Get current user's IP address
   */
  private async getCurrentIP(): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Failed to get IP address:", error);
      return '127.0.0.1'; // Fallback for localhost
    }
  }

  /**
   * Store API keys in Supabase with encryption
   */
  async storeApiKeys(keys: SupabaseApiKeys): Promise<void> {
    if (!supabase) {
      throw new Error("Supabase not configured");
    }

    try {
      // Encrypt keys with CryptoJS before sending to Supabase
      const encryptedKeys = encryptForStorage(keys);
      
      // Get current IP address
      const userIp = await this.getCurrentIP();
      
      const { data, error } = await supabase
        .from('user_api_keys')
        .upsert({
          user_id: this.userId,
          encrypted_keys: encryptedKeys,
          user_ip: userIp,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (error) {
        console.error("Supabase storage error:", error);
        throw error;
      }

      console.log('Stored encrypted keys to Supabase for user:', this.userId);
    } catch (error) {
      console.error("Failed to store API keys in Supabase:", error);
      throw new Error("Failed to store API keys in Supabase");
    }
  }

  /**
   * Get API keys from Supabase
   */
  async getApiKeys(): Promise<SupabaseApiKeys> {
    if (!supabase) {
      console.warn("Supabase not configured, returning empty keys");
      return {};
    }

    try {
      const { data, error } = await supabase
        .from('user_api_keys')
        .select('encrypted_keys')
        .eq('user_id', this.userId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows found - user hasn't stored keys yet
          console.log('No API keys found for user:', this.userId);
          return {};
        }
        console.error("Supabase retrieval error:", error);
        return {};
      }

      if (data?.encrypted_keys) {
        // Decrypt the keys
        const decryptedKeys = decryptFromStorage(data.encrypted_keys);
        console.log('Retrieved encrypted keys from Supabase for user:', this.userId);
        return decryptedKeys;
      }

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
    if (!supabase) {
      console.warn("Supabase not configured, cannot clear keys");
      return;
    }

    try {
      const { error } = await supabase
        .from('user_api_keys')
        .delete()
        .eq('user_id', this.userId);

      if (error) {
        console.error("Supabase clear error:", error);
        throw error;
      }

      console.log('Cleared API keys from Supabase for user:', this.userId);
    } catch (error) {
      console.error("Failed to clear API keys from Supabase:", error);
      throw new Error("Failed to clear API keys from Supabase");
    }
  }

  /**
   * Check if Supabase storage is configured
   */
  async isConfigured(): Promise<boolean> {
    if (!supabase) {
      return false;
    }

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
    supabaseAvailable: boolean;
  }> {
    const keys = await this.getApiKeys();
    const openaiConfigured = !!keys.openaiApiKey;
    const geminiConfigured = !!keys.geminiApiKey;
    
    return {
      configured: openaiConfigured || geminiConfigured,
      openaiConfigured,
      geminiConfigured,
      userId: this.userId,
      supabaseAvailable: !!supabase,
      warning: supabase 
        ? "API keys are encrypted with CryptoJS before being sent to Supabase. IP-based security rules protect access."
        : "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables."
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
  supabaseAvailable: boolean;
}> {
  return supabaseStorage.getStatus();
}