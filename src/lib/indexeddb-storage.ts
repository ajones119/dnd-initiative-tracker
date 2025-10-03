/**
 * IndexedDB storage for API keys with encryption
 * More secure and persistent than localStorage
 */

import { type AIModel } from "./settings";
import { encryptForStorage, decryptFromStorage } from "./encryption";

export interface IndexedDBApiKeys {
  openaiApiKey?: string;
  geminiApiKey?: string;
}

const DB_NAME = "InitiativeTrackerDB";
const DB_VERSION = 1;
const STORE_NAME = "api_keys";

class IndexedDBStorage {
  private db: IDBDatabase | null = null;

  /**
   * Initialize IndexedDB
   */
  private async initDB(): Promise<IDBDatabase> {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
    });
  }

  /**
   * Store API keys in IndexedDB with encryption
   */
  async storeApiKeys(keys: IndexedDBApiKeys): Promise<void> {
    try {
      const db = await this.initDB();
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const encryptedKeys = encryptForStorage(keys);
      
      const request = store.put({
        id: 'api_keys',
        data: encryptedKeys,
        timestamp: Date.now()
      });

      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      console.error("Failed to store API keys in IndexedDB:", error);
      throw new Error("Failed to store API keys in IndexedDB");
    }
  }

  /**
   * Get API keys from IndexedDB
   */
  async getApiKeys(): Promise<IndexedDBApiKeys> {
    try {
      const db = await this.initDB();
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);

      const request = store.get('api_keys');

      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          try {
            const result = request.result;
            if (!result || !result.data) {
              resolve({});
              return;
            }

            const decryptedKeys = decryptFromStorage(result.data);
            resolve(decryptedKeys || {});
          } catch (error) {
            console.error("Failed to decrypt API keys from IndexedDB:", error);
            resolve({});
          }
        };
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      console.error("Failed to retrieve API keys from IndexedDB:", error);
      return {};
    }
  }

  /**
   * Clear API keys from IndexedDB
   */
  async clearApiKeys(): Promise<void> {
    try {
      const db = await this.initDB();
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const request = store.delete('api_keys');

      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      console.error("Failed to clear API keys from IndexedDB:", error);
      throw new Error("Failed to clear API keys from IndexedDB");
    }
  }

  /**
   * Check if IndexedDB storage is available
   */
  isSupported(): boolean {
    return typeof indexedDB !== 'undefined';
  }
}

// Singleton instance
const indexedDBStorage = new IndexedDBStorage();

/**
 * Store API keys in IndexedDB
 */
export function storeApiKeysInIndexedDB(keys: IndexedDBApiKeys): Promise<void> {
  return indexedDBStorage.storeApiKeys(keys);
}

/**
 * Get API keys from IndexedDB
 */
export function getApiKeysFromIndexedDB(): Promise<IndexedDBApiKeys> {
  return indexedDBStorage.getApiKeys();
}

/**
 * Clear API keys from IndexedDB
 */
export function clearApiKeysFromIndexedDB(): Promise<void> {
  return indexedDBStorage.clearApiKeys();
}

/**
 * Check if IndexedDB storage is configured
 */
export async function isIndexedDBStorageConfigured(): Promise<boolean> {
  if (!indexedDBStorage.isSupported()) return false;
  
  const keys = await getApiKeysFromIndexedDB();
  return !!(keys.openaiApiKey || keys.geminiApiKey);
}

/**
 * Get the appropriate API key for the given model from IndexedDB
 */
export async function getIndexedDBApiKey(model: AIModel): Promise<string> {
  const keys = await getApiKeysFromIndexedDB();
  
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
 * Get IndexedDB storage status for debugging
 */
export async function getIndexedDBStorageStatus(): Promise<{
  configured: boolean;
  openaiConfigured: boolean;
  geminiConfigured: boolean;
  supported: boolean;
  warning: string;
}> {
  const supported = indexedDBStorage.isSupported();
  
  if (!supported) {
    return {
      configured: false,
      openaiConfigured: false,
      geminiConfigured: false,
      supported: false,
      warning: "IndexedDB is not supported in this browser."
    };
  }

  const keys = await getApiKeysFromIndexedDB();
  const openaiConfigured = !!keys.openaiApiKey;
  const geminiConfigured = !!keys.geminiApiKey;
  
  return {
    configured: openaiConfigured || geminiConfigured,
    openaiConfigured,
    geminiConfigured,
    supported: true,
    warning: "IndexedDB provides encrypted persistent storage with better security than localStorage."
  };
}