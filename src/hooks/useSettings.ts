import { useMemo, useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  DEFAULT_SETTINGS,
  SettingsSchema,
  type Settings,
  type StorageMethod,
} from "../lib/settings";
import { unifiedStorage } from "../lib/unified-storage";

const SETTINGS_KEY = "initiative-tracker-settings";

export const useSettings = () => {
  // Use simple localStorage without custom serializer for now
  const [storedSettings, setStoredSettings] = useLocalStorage<Settings>(
    SETTINGS_KEY,
    DEFAULT_SETTINGS,
  );

  const [storageAnalysis, setStorageAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Validate and sanitize settings from localStorage (memoized to prevent infinite loops)
  const settings = useMemo(() => {
    return SettingsSchema.parse({
      ...DEFAULT_SETTINGS,
      ...storedSettings,
    });
  }, [storedSettings]);

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
      
      // If using unified storage and API keys are being updated
      if (validatedSettings.useUnifiedStorage && 
          (newSettings.openaiApiKey !== undefined || newSettings.geminiApiKey !== undefined)) {
        
        const keysToStore = {
          openaiApiKey: newSettings.openaiApiKey,
          geminiApiKey: newSettings.geminiApiKey,
        };
        
        // Store in unified storage
        const success = await unifiedStorage.storeApiKeys(keysToStore);
        if (success) {
          // Clear keys from localStorage when using unified storage
          validatedSettings.openaiApiKey = "";
          validatedSettings.geminiApiKey = "";
        }
      }
      
      setStoredSettings(validatedSettings);
    },
    [settings, setStoredSettings],
  );

  const resetSettings = useCallback(async () => {
    // Clear from unified storage if enabled
    if (settings.useUnifiedStorage) {
      await unifiedStorage.clearApiKeys();
    }
    setStoredSettings(DEFAULT_SETTINGS);
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
    if (settings.useUnifiedStorage) {
      return await unifiedStorage.getApiKey(model as any);
    }
    
    // Fallback to localStorage
    if (model === "openai") return settings.openaiApiKey;
    if (model === "gemini") return settings.geminiApiKey;
    return "";
  }, [settings]);

  return {
    settings,
    updateSettings,
    resetSettings,
    switchStorageMethod,
    getCurrentApiKey,
    storageAnalysis,
    loading,
    isEncrypted: false,
  };
};
