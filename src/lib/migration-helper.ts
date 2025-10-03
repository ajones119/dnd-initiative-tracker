/**
 * Migration helper for upgrading storage methods while preserving API keys
 */

import { unifiedStorage } from './unified-storage';
import { type Settings } from './settings';

/**
 * Migrate API keys from localStorage to a more secure method
 * This preserves existing keys so users don't have to re-enter them
 */
export async function migrateToSecureStorage(currentSettings: Settings): Promise<{
  success: boolean;
  newMethod: string;
  keysPreserved: boolean;
  message: string;
}> {
  try {
    // Check if we have existing API keys in localStorage
    const hasExistingKeys = currentSettings.openaiApiKey || currentSettings.geminiApiKey;
    
    if (!hasExistingKeys) {
      // No keys to migrate, just switch to secure storage
      await unifiedStorage.setPreferredMethod('indexeddb');
      return {
        success: true,
        newMethod: 'indexeddb',
        keysPreserved: false,
        message: 'Switched to secure IndexedDB storage (no existing keys to migrate)'
      };
    }

    // Extract existing keys
    const existingKeys = {
      openaiApiKey: currentSettings.openaiApiKey,
      geminiApiKey: currentSettings.geminiApiKey
    };

    // Try to migrate to IndexedDB first
    try {
      await unifiedStorage.setPreferredMethod('indexeddb');
      const storeSuccess = await unifiedStorage.storeApiKeys(existingKeys);
      
      if (storeSuccess) {
        return {
          success: true,
          newMethod: 'indexeddb',
          keysPreserved: true,
          message: 'Successfully migrated to IndexedDB storage - your API keys are preserved!'
        };
      }
    } catch (error) {
      console.warn('IndexedDB migration failed, trying fallback:', error);
    }

    // Fallback to cookies if IndexedDB fails
    try {
      await unifiedStorage.setPreferredMethod('cookies');
      const storeSuccess = await unifiedStorage.storeApiKeys(existingKeys);
      
      if (storeSuccess) {
        return {
          success: true,
          newMethod: 'cookies',
          keysPreserved: true,
          message: 'Migrated to secure cookie storage - your API keys are preserved!'
        };
      }
    } catch (error) {
      console.warn('Cookie migration failed:', error);
    }

    // If all else fails, keep using localStorage
    return {
      success: false,
      newMethod: 'localstorage',
      keysPreserved: true,
      message: 'Unable to migrate to secure storage, keeping localStorage (keys preserved)'
    };

  } catch (error) {
    console.error('Migration failed:', error);
    return {
      success: false,
      newMethod: 'localstorage',
      keysPreserved: true,
      message: `Migration failed: ${error}. Your keys are still safe in localStorage.`
    };
  }
}

/**
 * Check if migration is recommended
 */
export function shouldRecommendMigration(currentSettings: Settings): boolean {
  // Recommend migration if using localStorage with API keys
  return currentSettings.storageMethod === 'localstorage' && 
         (!!currentSettings.openaiApiKey || !!currentSettings.geminiApiKey);
}

/**
 * Get migration recommendation
 */
export function getMigrationRecommendation(currentSettings: Settings): {
  recommended: boolean;
  currentMethod: string;
  recommendedMethod: string;
  reason: string;
  benefits: string[];
} {
  const isUsingLocalStorage = currentSettings.storageMethod === 'localstorage';
  const hasApiKeys = !!(currentSettings.openaiApiKey || currentSettings.geminiApiKey);
  
  return {
    recommended: isUsingLocalStorage && hasApiKeys,
    currentMethod: currentSettings.storageMethod,
    recommendedMethod: 'indexeddb',
    reason: isUsingLocalStorage ? 
      'localStorage is vulnerable to XSS attacks' : 
      'Current storage method is already secure',
    benefits: [
      '🔒 Better encryption and security',
      '💾 Same persistence as localStorage (no re-entry needed)',
      '📦 Larger storage capacity',
      '🛡️ Protection against XSS attacks',
      '🔄 Automatic fallback to localStorage if needed'
    ]
  };
}

/**
 * One-click secure upgrade
 */
export async function oneClickSecureUpgrade(currentSettings: Settings): Promise<{
  success: boolean;
  message: string;
  newSettings: Partial<Settings>;
}> {
  const migration = await migrateToSecureStorage(currentSettings);
  
  if (migration.success) {
    return {
      success: true,
      message: migration.message,
      newSettings: {
        storageMethod: migration.newMethod as any,
        useUnifiedStorage: migration.newMethod !== 'localstorage',
        // Clear keys from localStorage when using secure storage
        openaiApiKey: migration.keysPreserved ? "" : currentSettings.openaiApiKey,
        geminiApiKey: migration.keysPreserved ? "" : currentSettings.geminiApiKey
      }
    };
  }
  
  return {
    success: false,
    message: migration.message,
    newSettings: {}
  };
}