import { useMemo, useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  DEFAULT_SETTINGS,
  SettingsSchema,
  type Settings,
} from "../lib/settings";

const SETTINGS_KEY = "initiative-tracker-settings";

export const useSettings = () => {
  // Use simple localStorage without custom serializer for now
  const [storedSettings, setStoredSettings] = useLocalStorage<Settings>(
    SETTINGS_KEY,
    DEFAULT_SETTINGS,
  );

  // Validate and sanitize settings from localStorage (memoized to prevent infinite loops)
  const settings = useMemo(() => {
    return SettingsSchema.parse({
      ...DEFAULT_SETTINGS,
      ...storedSettings,
    });
  }, [storedSettings]);

  const updateSettings = useCallback(
    (newSettings: Partial<Settings>) => {
      const updatedSettings = { ...settings, ...newSettings };
      const validatedSettings = SettingsSchema.parse(updatedSettings);
      setStoredSettings(validatedSettings);
    },
    [settings, setStoredSettings],
  );

  const resetSettings = useCallback(() => {
    setStoredSettings(DEFAULT_SETTINGS);
  }, [setStoredSettings]);

  return {
    settings,
    updateSettings,
    resetSettings,
    isEncrypted: false,
  };
};
