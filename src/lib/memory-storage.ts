/**
 * In-memory storage for API keys with session-based encryption
 * Most secure client-side option - data is lost on page refresh
 */

import { type AIModel } from "./settings";

export interface MemoryApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

class MemoryStorage {
  private apiKeys: MemoryApiKeys = {};
  private sessionId: string;
  private encryptionKey: string;

  constructor() {
    // Generate a unique session ID
    this.sessionId = this.generateSessionId();
    // Generate encryption key based on session
    this.encryptionKey = this.generateEncryptionKey();
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate encryption key based on session
   */
  private generateEncryptionKey(): string {
    // In a real implementation, this would use Web Crypto API
    const sessionData = `${this.sessionId}_${navigator.userAgent}_${Date.now()}`;
    return btoa(sessionData).substring(0, 32);
  }

  /**
   * Simple XOR encryption for in-memory storage
   */
  private encrypt(text: string): string {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
      const keyChar = this.encryptionKey.charCodeAt(i % this.encryptionKey.length);
      const textChar = text.charCodeAt(i);
      encrypted += String.fromCharCode(textChar ^ keyChar);
    }
    return btoa(encrypted);
  }

  /**
   * Simple XOR decryption for in-memory storage
   */
  private decrypt(encryptedText: string): string {
    try {
      const encrypted = atob(encryptedText);
      let decrypted = '';
      for (let i = 0; i < encrypted.length; i++) {
        const keyChar = this.encryptionKey.charCodeAt(i % this.encryptionKey.length);
        const encryptedChar = encrypted.charCodeAt(i);
        decrypted += String.fromCharCode(encryptedChar ^ keyChar);
      }
      return decrypted;
    } catch (error) {
      console.error("Failed to decrypt data:", error);
      return '';
    }
  }

  /**
   * Store API keys in memory with encryption
   */
  storeApiKeys(keys: MemoryApiKeys): void {
    // Encrypt each key individually
    this.apiKeys = {
      openaiApiKey: keys.openaiApiKey ? this.encrypt(keys.openaiApiKey) : undefined,
      geminiApiKey: keys.geminiApiKey ? this.encrypt(keys.geminiApiKey) : undefined,
    };
  }

  /**
   * Get API keys from memory
   */
  getApiKeys(): MemoryApiKeys {
    // Decrypt each key
    return {
      openaiApiKey: this.apiKeys.openaiApiKey ? this.decrypt(this.apiKeys.openaiApiKey) : undefined,
      geminiApiKey: this.apiKeys.geminiApiKey ? this.decrypt(this.apiKeys.geminiApiKey) : undefined,
    };
  }

  /**
   * Clear API keys from memory
   */
  clearApiKeys(): void {
    this.apiKeys = {};
  }

  /**
   * Check if memory storage is configured
   */
  isConfigured(): boolean {
    const keys = this.getApiKeys();
    return !!(keys.openaiApiKey || keys.geminiApiKey);
  }

  /**
   * Get the appropriate API key for the given model from memory
   */
  getApiKey(model: AIModel): string {
    const keys = this.getApiKeys();
    
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
   * Get memory storage status for debugging
   */
  getStatus(): {
    configured: boolean;
    openaiConfigured: boolean;
    geminiConfigured: boolean;
    sessionId: string;
    warning: string;
  } {
    const keys = this.getApiKeys();
    const openaiConfigured = !!keys.openaiApiKey;
    const geminiConfigured = !!keys.geminiApiKey;
    
    return {
      configured: openaiConfigured || geminiConfigured,
      openaiConfigured,
      geminiConfigured,
      sessionId: this.sessionId,
      warning: "In-memory storage is lost on page refresh. Most secure client-side option."
    };
  }
}

// Singleton instance
const memoryStorage = new MemoryStorage();

/**
 * Store API keys in memory
 */
export function storeApiKeysInMemory(keys: MemoryApiKeys): void {
  memoryStorage.storeApiKeys(keys);
}

/**
 * Get API keys from memory
 */
export function getApiKeysFromMemory(): MemoryApiKeys {
  return memoryStorage.getApiKeys();
}

/**
 * Clear API keys from memory
 */
export function clearApiKeysFromMemory(): void {
  memoryStorage.clearApiKeys();
}

/**
 * Check if memory storage is configured
 */
export function isMemoryStorageConfigured(): boolean {
  return memoryStorage.isConfigured();
}

/**
 * Get the appropriate API key for the given model from memory
 */
export function getMemoryApiKey(model: AIModel): string {
  return memoryStorage.getApiKey(model);
}

/**
 * Get memory storage status for debugging
 */
export function getMemoryStorageStatus(): {
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  sessionId: string;
  warning: string;
} {
  return memoryStorage.getStatus();
}