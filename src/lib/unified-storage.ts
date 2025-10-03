/**
 * Unified storage manager for API keys
 * Supports multiple storage methods with fallback chain
 */

import { type AIModel, type Settings } from "./settings";

// Import all storage methods
import { 
  getApiKeysFromEnv, 
  getEnvApiKey, 
  isEnvStorageConfigured,
  getEnvStorageStatus 
} from "./env-storage";

import { 
  getApiKeysFromCookies, 
  getCookieApiKey, 
  isCookieStorageConfigured,
  storeApiKeysInCookies,
  clearApiKeyCookies,
  getCookieStorageStatus 
} from "./cookie-storage";

import { 
  getApiKeysFromSession, 
  getSessionApiKey, 
  isSessionStorageConfigured,
  storeApiKeysInSession,
  clearApiKeysFromSession,
  getSessionStorageStatus 
} from "./session-storage";

import { 
  getApiKeysFromIndexedDB, 
  getIndexedDBApiKey, 
  isIndexedDBStorageConfigured,
  storeApiKeysInIndexedDB,
  clearApiKeysFromIndexedDB,
  getIndexedDBStorageStatus 
} from "./indexeddb-storage";

import { 
  getApiKeysFromMemory, 
  getMemoryApiKey, 
  isMemoryStorageConfigured,
  storeApiKeysInMemory,
  clearApiKeysFromMemory,
  getMemoryStorageStatus 
} from "./memory-storage";

import { 
  proxyService,
  getIndexedDBApiKey as getProxyApiKey,
  isIndexedDBStorageConfigured as isProxyStorageConfigured 
} from "./proxy-service";

export type StorageMethod = 
  | 'environment'
  | 'proxy'
  | 'indexeddb'
  | 'cookies'
  | 'session'
  | 'memory'
  | 'localstorage';

export interface StorageStatus {
  method: StorageMethod;
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  priority: number;
  available: boolean;
  warning?: string;
}

export interface ApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

class UnifiedStorageManager {
  private preferredMethod: StorageMethod = 'indexeddb';
  private fallbackChain: StorageMethod[] = [
    'environment',
    'proxy',
    'indexeddb',      // Primary: Persistent + Secure
    'localstorage',   // Fallback: Current method (persistent)
    'cookies',        // Fallback: Persistent
    'session',        // Fallback: Session-only
    'memory'          // Last resort: Session-only
  ];

  /**
   * Set the preferred storage method
   */
  setPreferredMethod(method: StorageMethod): void {
    this.preferredMethod = method;
    // Reorder fallback chain to put preferred method first
    this.fallbackChain = [
      method,
      ...this.fallbackChain.filter(m => m !== method)
    ];
  }

  /**
   * Get the best available storage method
   */
  async getBestAvailableMethod(): Promise<StorageMethod> {
    for (const method of this.fallbackChain) {
      const status = await this.getStorageStatus(method);
      if (status.available && status.configured) {
        return method;
      }
    }

    // If no configured method found, return the first available one
    for (const method of this.fallbackChain) {
      const status = await this.getStorageStatus(method);
      if (status.available) {
        return method;
      }
    }

    return 'localstorage'; // Fallback to localStorage
  }

  /**
   * Get API key for the specified model using the best available method
   */
  async getApiKey(model: AIModel): Promise<string> {
    const method = await this.getBestAvailableMethod();
    return this.getApiKeyForMethod(model, method);
  }

  /**
   * Get API key for the specified model using a specific method
   */
  async getApiKeyForMethod(model: AIModel, method: StorageMethod): Promise<string> {
    switch (method) {
      case 'environment':
        return getEnvApiKey(model);
      
      case 'proxy':
        // Proxy service doesn't expose API keys directly
        return '';
      
      case 'indexeddb':
        return await getIndexedDBApiKey(model);
      
      case 'cookies':
        return getCookieApiKey(model);
      
      case 'session':
        return getSessionApiKey(model);
      
      case 'memory':
        return getMemoryApiKey(model);
      
      case 'localstorage':
        // This would use your existing localStorage implementation
        return '';
      
      default:
        return '';
    }
  }

  /**
   * Store API keys using the preferred method
   */
  async storeApiKeys(keys: ApiKeys): Promise<boolean> {
    const method = await this.getBestAvailableMethod();
    
    try {
      switch (method) {
        case 'environment':
          // Environment variables can't be set from client
          console.warn('Cannot set environment variables from client');
          return false;
        
        case 'proxy':
          const result = await proxyService.saveApiKeys(keys);
          return result.success;
        
        case 'indexeddb':
          await storeApiKeysInIndexedDB(keys);
          return true;
        
        case 'cookies':
          storeApiKeysInCookies(keys);
          return true;
        
        case 'session':
          storeApiKeysInSession(keys);
          return true;
        
        case 'memory':
          storeApiKeysInMemory(keys);
          return true;
        
        case 'localstorage':
          // This would use your existing localStorage implementation
          return false;
        
        default:
          return false;
      }
    } catch (error) {
      console.error(`Failed to store API keys using ${method}:`, error);
      return false;
    }
  }

  /**
   * Clear API keys from all storage methods
   */
  async clearApiKeys(): Promise<void> {
    const clearPromises = [
      proxyService.clearApiKeys(),
      clearApiKeysFromIndexedDB(),
      clearApiKeyCookies(),
      clearApiKeysFromSession(),
      clearApiKeysFromMemory(),
      // Add localStorage clear here if needed
    ];

    await Promise.allSettled(clearPromises);
  }

  /**
   * Get storage status for a specific method
   */
  async getStorageStatus(method: StorageMethod): Promise<StorageStatus> {
    const priority = this.fallbackChain.indexOf(method);
    
    switch (method) {
      case 'environment':
        const envStatus = getEnvStorageStatus();
        return {
          method,
          configured: envStatus.configured,
          openaiConfigured: envStatus.openaiConfigured,
          geminiConfigured: envStatus.geminiConfigured,
          priority,
          available: true,
          warning: envStatus.warning
        };
      
      case 'proxy':
        const proxyStatus = await proxyService.getStatus();
        return {
          method,
          configured: proxyStatus.configured,
          openaiConfigured: proxyStatus.openaiConfigured,
          geminiConfigured: proxyStatus.geminiConfigured,
          priority,
          available: proxyStatus.available,
          warning: proxyStatus.warning
        };
      
      case 'indexeddb':
        const indexedDBStatus = await getIndexedDBStorageStatus();
        return {
          method,
          configured: indexedDBStatus.configured,
          openaiConfigured: indexedDBStatus.openaiConfigured,
          geminiConfigured: indexedDBStatus.geminiConfigured,
          priority,
          available: indexedDBStatus.supported,
          warning: indexedDBStatus.warning
        };
      
      case 'cookies':
        const cookieStatus = getCookieStorageStatus();
        return {
          method,
          configured: cookieStatus.configured,
          openaiConfigured: cookieStatus.openaiConfigured,
          geminiConfigured: cookieStatus.geminiConfigured,
          priority,
          available: true,
          warning: cookieStatus.warning
        };
      
      case 'session':
        const sessionStatus = getSessionStorageStatus();
        return {
          method,
          configured: sessionStatus.configured,
          openaiConfigured: sessionStatus.openaiConfigured,
          geminiConfigured: sessionStatus.geminiConfigured,
          priority,
          available: true,
          warning: sessionStatus.warning
        };
      
      case 'memory':
        const memoryStatus = getMemoryStorageStatus();
        return {
          method,
          configured: memoryStatus.configured,
          openaiConfigured: memoryStatus.openaiConfigured,
          geminiConfigured: memoryStatus.geminiConfigured,
          priority,
          available: true,
          warning: memoryStatus.warning
        };
      
      case 'localstorage':
        return {
          method,
          configured: false, // You'd check your existing localStorage implementation
          openaiConfigured: false,
          geminiConfigured: false,
          priority,
          available: true,
          warning: "Current localStorage implementation with basic encryption."
        };
      
      default:
        return {
          method,
          configured: false,
          openaiConfigured: false,
          geminiConfigured: false,
          priority: 999,
          available: false,
          warning: "Unknown storage method."
        };
    }
  }

  /**
   * Get status for all storage methods
   */
  async getAllStorageStatus(): Promise<StorageStatus[]> {
    const statusPromises = this.fallbackChain.map(method => this.getStorageStatus(method));
    return Promise.all(statusPromises);
  }

  /**
   * Get comprehensive storage analysis
   */
  async getStorageAnalysis(): Promise<{
    bestMethod: StorageMethod;
    allStatuses: StorageStatus[];
    recommendations: string[];
    securityScore: number;
  }> {
    const allStatuses = await this.getAllStorageStatus();
    const bestMethod = await this.getBestAvailableMethod();
    
    const recommendations: string[] = [];
    let securityScore = 0;
    
    // Analyze each method
    for (const status of allStatuses) {
      if (status.configured) {
        switch (status.method) {
          case 'environment':
            securityScore += 10;
            recommendations.push("✅ Environment variables: Most secure server-side option");
            break;
          case 'proxy':
            securityScore += 9;
            recommendations.push("✅ Proxy service: Excellent security, keys never leave server");
            break;
          case 'indexeddb':
            securityScore += 7;
            recommendations.push("✅ IndexedDB: Good encrypted persistent storage");
            break;
          case 'cookies':
            securityScore += 6;
            recommendations.push("⚠️ Cookies: Good but visible to JavaScript (use httpOnly in production)");
            break;
          case 'session':
            securityScore += 5;
            recommendations.push("⚠️ Session storage: Better than localStorage, cleared on tab close");
            break;
          case 'memory':
            securityScore += 8;
            recommendations.push("✅ In-memory: Most secure client-side, lost on refresh");
            break;
          case 'localstorage':
            securityScore += 3;
            recommendations.push("❌ localStorage: Basic security, vulnerable to XSS");
            break;
        }
      }
    }
    
    // Add general recommendations
    if (securityScore < 5) {
      recommendations.push("🔒 Consider upgrading to a more secure storage method");
    }
    
    if (allStatuses.find(s => s.method === 'environment' && s.configured)) {
      recommendations.push("🌟 Environment variables detected - excellent security!");
    }
    
    return {
      bestMethod,
      allStatuses,
      recommendations,
      securityScore: Math.min(securityScore, 10)
    };
  }
}

// Singleton instance
export const unifiedStorage = new UnifiedStorageManager();