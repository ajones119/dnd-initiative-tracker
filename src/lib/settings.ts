import { z } from "zod";

// AI Model types
export type AIModel = "openai" | "gemini" | "none";

// Settings schema for validation
export const SettingsSchema = z.object({
  aiModel: z.enum(["openai", "gemini", "none"]).default("none"),
  openaiApiKey: z.string().default(""),
  geminiApiKey: z.string().default(""),
});

export type Settings = z.infer<typeof SettingsSchema>;

// Default settings
export const DEFAULT_SETTINGS: Settings = {
  aiModel: "none",
  openaiApiKey: "",
  geminiApiKey: "",
};

// Helper to check if AI is available
export const isAIAvailable = (settings: Settings): boolean => {
  if (settings.aiModel === "none") return false;
  if (settings.aiModel === "openai") return settings.openaiApiKey.trim() !== "";
  if (settings.aiModel === "gemini") return settings.geminiApiKey.trim() !== "";
  return false;
};

// Helper to get current API key
export const getCurrentApiKey = (settings: Settings): string => {
  if (settings.aiModel === "openai") return settings.openaiApiKey;
  if (settings.aiModel === "gemini") return settings.geminiApiKey;
  return "";
};
