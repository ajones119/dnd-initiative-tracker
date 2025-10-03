import { useMemo, useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  DEFAULT_SETTINGS,
  SettingsSchema,
  type Settings,
  type StorageMethod,
} from "../lib/settings";
import { unifiedStorage } from "../lib/unified-storage";
import { 
  storeApiKeysInIndexedDB, 
  getApiKeysFromIndexedDB, 
  clearApiKeysFromIndexedDB,
  isIndexedDBStorageConfigured 
} from "../lib/indexeddb-storage";

const SETTINGS_KEY = "initiative-tracker-settings";

export const useSettings = () => {
  // Use simple localStorage without custom serializer for now
  const [storedSettings, setStoredSettings] = useLocalStorage<Settings>(
    SETTINGS_KEY,
    DEFAULT_SETTINGS,
  );

  const [storageAnalysis, setStorageAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [indexedDBKeys, setIndexedDBKeys] = useState<{openaiApiKey?: string; geminiApiKey?: string}>({});
  const [indexedDBLoaded, setIndexedDBLoaded] = useState(false);

  // Load IndexedDB keys on mount
  useEffect(() => {
    const loadIndexedDBKeys = async () => {
      try {
        const keys = await getApiKeysFromIndexedDB();
        setIndexedDBKeys(keys);
        setIndexedDBLoaded(true);
      } catch (error) {
        console.error("Failed to load IndexedDB keys:", error);
        setIndexedDBLoaded(true);
      }
    };
    
    loadIndexedDBKeys();
  }, []);

  // Validate and sanitize settings from localStorage (memoized to prevent infinite loops)
  const settings = useMemo(() => {
    const baseSettings = SettingsSchema.parse({
      ...DEFAULT_SETTINGS,
      ...storedSettings,
    });

    // If IndexedDB is configured and we have keys, use those instead of localStorage
    if (indexedDBLoaded && (indexedDBKeys.openaiApiKey || indexedDBKeys.geminiApiKey)) {
      return {
        ...baseSettings,
        // Use IndexedDB keys if available, otherwise fallback to localStorage
        openaiApiKey: indexedDBKeys.openaiApiKey || baseSettings.openaiApiKey,
        geminiApiKey: indexedDBKeys.geminiApiKey || baseSettings.geminiApiKey,
        storageMethod: 'indexeddb' as const,
        useUnifiedStorage: true,
      };
    }

    return baseSettings;
  }, [storedSettings, indexedDBKeys, indexedDBLoaded]);

  // Load storage analysis when component mounts or settings change
  useEffect(() => {
    const loadStorageAnalysis = async () => {
      setLoading(true);
      try {
        const analysis = await unifiedStorage.getStorageAnalysis();
        setStorageAnalysis(analysis);
      } catch (error) {
        console.error("Failed to load storage analysis:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStorageAnalysis();
  }, [settings.storageMethod, settings.useUnifiedStorage]);

  const updateSettings = useCallback(
    async (newSettings: Partial<Settings>) => {
      const updatedSettings = { ...settings, ...newSettings };
      const validatedSettings = SettingsSchema.parse(updatedSettings);
      
      // Check if API keys are being updated
      if (newSettings.openaiApiKey !== undefined || newSettings.geminiApiKey !== undefined) {
        const keysToStore = {
          openaiApiKey: newSettings.openaiApiKey,
          geminiApiKey: newSettings.geminiApiKey,
        };
        
        // Try to store in IndexedDB first
        try {
          await storeApiKeysInIndexedDB(keysToStore);
          
          // Update local state
          setIndexedDBKeys(keysToStore);
          
          // Clear keys from localStorage since we're using IndexedDB
          const settingsForStorage = {
            ...validatedSettings,
            openaiApiKey: "",
            geminiApiKey: "",
            storageMethod: 'indexeddb' as const,
            useUnifiedStorage: true,
          };
          
          setStoredSettings(settingsForStorage);
          return;
        } catch (error) {
          console.error("Failed to store in IndexedDB, falling back to localStorage:", error);
          
          // Fallback to localStorage if IndexedDB fails
          const settingsForStorage = {
            ...validatedSettings,
            storageMethod: 'localstorage' as const,
            useUnifiedStorage: false,
          };
          
          setStoredSettings(settingsForStorage);
          return;
        }
      }
      
      // For non-API key updates, just update localStorage
      setStoredSettings(validatedSettings);
    },
    [settings, setStoredSettings],
  );

  const resetSettings = useCallback(async () => {
    try {
      // Clear from IndexedDB
      await clearApiKeysFromIndexedDB();
      setIndexedDBKeys({});
      
      // Clear from unified storage if enabled
      if (settings.useUnifiedStorage) {
        await unifiedStorage.clearApiKeys();
      }
      
      // Reset to default settings
      setStoredSettings(DEFAULT_SETTINGS);
    } catch (error) {
      console.error("Failed to reset settings:", error);
      // Still reset localStorage even if IndexedDB fails
      setStoredSettings(DEFAULT_SETTINGS);
    }
  }, [setStoredSettings, settings.useUnifiedStorage]);

  const switchStorageMethod = useCallback(async (method: StorageMethod) => {
    // Migrate API keys to new storage method
    const currentKeys = {
      openaiApiKey: settings.openaiApiKey,
      geminiApiKey: settings.geminiApiKey,
    };
    
    // Set new storage method
    unifiedStorage.setPreferredMethod(method);
    
    // Update settings
    await updateSettings({
      storageMethod: method,
      useUnifiedStorage: method !== 'localstorage'
    });
    
    // If switching to unified storage, migrate keys
    if (method !== 'localstorage' && (currentKeys.openaiApiKey || currentKeys.geminiApiKey)) {
      await unifiedStorage.storeApiKeys(currentKeys);
      await updateSettings({
        openaiApiKey: "",
        geminiApiKey: "",
      });
    }
  }, [settings, updateSettings]);

  const getCurrentApiKey = useCallback(async (model: string) => {
    // Try IndexedDB first
    if (indexedDBKeys.openaiApiKey || indexedDBKeys.geminiApiKey) {
      if (model === "openai") return indexedDBKeys.openaiApiKey || "";
      if (model === "gemini") return indexedDBKeys.geminiApiKey || "";
    }
    
    // Fallback to unified storage
    if (settings.useUnifiedStorage) {
      return await unifiedStorage.getApiKey(model as any);
    }
    
    // Final fallback to localStorage
    if (model === "openai") return settings.openaiApiKey;
    if (model === "gemini") return settings.geminiApiKey;
    return "";
  }, [settings, indexedDBKeys]);

  return {
    settings,
    updateSettings,
    resetSettings,
    switchStorageMethod,
    getCurrentApiKey,
    storageAnalysis,
    loading,
    indexedDBLoaded,
    isEncrypted: indexedDBKeys.openaiApiKey || indexedDBKeys.geminiApiKey ? true : false,
  };
};
