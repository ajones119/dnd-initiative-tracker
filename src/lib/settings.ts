import { z } from "zod";

// AI Model type - OpenAI only via Supabase edge function
export type AIModel = "openai";

// Settings schema - simplified for OpenAI only
export const SettingsSchema = z.object({
  aiModel: z.enum(["openai"]).default("openai"),
  // Keeping these fields for backwards compatibility but they're not used
  openaiApiKey: z.string().default(""),
  geminiApiKey: z.string().default(""),
});

export type Settings = z.infer<typeof SettingsSchema>;

// Default settings - AI is always enabled via Supabase edge function
export const DEFAULT_SETTINGS: Settings = {
  aiModel: "openai",
  openaiApiKey: "",
  geminiApiKey: "",
};

// AI is always available - using Supabase edge function
export const isAIAvailable = (settings?: Settings): boolean => {
  return true; // Always available via Supabase edge function
};

// Not needed - keeping for backwards compatibility
export const getCurrentApiKey = (settings: Settings): string => {
  return ""; // Not needed - using Supabase edge function
};
