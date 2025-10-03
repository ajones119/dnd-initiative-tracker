import { z } from "zod";

// AI Model types
export type AIModel = "openai" | "gemini" | "groq" | "none";

// Storage method types
export type StorageMethod = 
  | 'environment'
  | 'proxy'
  | 'indexeddb'
  | 'cookies'
  | 'session'
  | 'memory'
  | 'localstorage';

// Settings schema for validation
export const SettingsSchema = z.object({
  aiModel: z.enum(["openai", "gemini", "groq", "none"]).default("none"),
  openaiApiKey: z.string().default(""),
  geminiApiKey: z.string().default(""),
  storageMethod: z.enum([
    "environment",
    "proxy", 
    "indexeddb",
    "cookies",
    "session",
    "memory",
    "localstorage"
  ]).default("localstorage"),
  useUnifiedStorage: z.boolean().default(false),
});

export type Settings = z.infer<typeof SettingsSchema>;

// Default settings
export const DEFAULT_SETTINGS: Settings = {
  aiModel: "none",
  openaiApiKey: "",
  geminiApiKey: "",
  storageMethod: "localstorage",
  useUnifiedStorage: false,
};

// Helper to check if AI is available
export const isAIAvailable = (settings: Settings): boolean => {
  if (settings.aiModel === "none") return false;
  if (settings.aiModel === "openai") return settings.openaiApiKey.trim() !== "";
  if (settings.aiModel === "gemini") return settings.geminiApiKey.trim() !== "";
  if (settings.aiModel === "groq") return true; // Groq is always available (free tier)
  return false;
};

// Helper to get current API key
export const getCurrentApiKey = (settings: Settings): string => {
  if (settings.aiModel === "openai") return settings.openaiApiKey;
  if (settings.aiModel === "gemini") return settings.geminiApiKey;
  if (settings.aiModel === "groq") return ""; // Groq doesn't need user API key
  return "";
};
