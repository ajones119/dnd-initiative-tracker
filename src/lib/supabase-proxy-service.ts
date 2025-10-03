/**
 * Supabase Proxy Service
 * Handles AI requests through Supabase with IP-based rate limiting
 */

import { type AIModel } from "./settings";
import { 
  supabase, 
  getUserIP, 
  validatePrompt, 
  checkRateLimit, 
  recordRequest,
  getUsageStats 
} from "./supabase-client";
import {
  AIInitiativeResponseSchema,
  AIEncounterResponseSchema,
  type AIInitiativeResponse,
  type AIEncounterResponse,
} from "./ai-schemas";

// Groq API key (server-side only)
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "xai-4VYWLJHpbvsMQhA2IRk9MWm6AbPGCbe39LiL9SYXeGITeAqoyCwzfBoAawZVqvml9OZNyyGXA1QDXQNL";

class SupabaseProxyService {
  /**
   * Generate initiative data through Supabase proxy
   */
  async generateInitiativeData(
    prompt: string,
    model: AIModel,
  ): Promise<AIInitiativeResponse> {
    if (model !== "groq") {
      throw new Error("Supabase proxy only supports Groq model");
    }

    const startTime = Date.now();
    
    try {
      // Get user's IP address
      const ipAddress = await getUserIP();
      const userAgent = navigator.userAgent;

      // Validate prompt
      const promptValidation = validatePrompt(prompt);
      if (!promptValidation.isValid) {
        throw new Error(promptValidation.reason);
      }

      // Check rate limit
      const rateLimit = await checkRateLimit(ipAddress);
      if (!rateLimit.allowed) {
        const resetTime = new Date(rateLimit.resetTime);
        const hoursUntilReset = (resetTime.getTime() - Date.now()) / (1000 * 60 * 60);
        
        throw new Error(
          `Daily limit reached (${rateLimit.requestsUsed}/${rateLimit.requestsUsed + rateLimit.requestsRemaining}). ` +
          `Please try again in ${hoursUntilReset.toFixed(1)} hours.`
        );
      }

      // Make request to Supabase Edge Function
      const response = await this.callSupabaseFunction('generate-initiative', {
        prompt,
        model,
        ipAddress,
        userAgent
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();

      // Record the request
      await recordRequest(ipAddress, userAgent, prompt, model);

      // Validate response
      const validatedResponse = AIInitiativeResponseSchema.parse(data);
      
      return validatedResponse;
    } catch (error) {
      console.error("Supabase proxy error:", error);
      throw error;
    }
  }

  /**
   * Generate encounter data through Supabase proxy
   */
  async generateEncounterData(
    prompt: string,
    model: AIModel,
  ): Promise<AIEncounterResponse> {
    if (model !== "groq") {
      throw new Error("Supabase proxy only supports Groq model");
    }

    try {
      // Get user's IP address
      const ipAddress = await getUserIP();
      const userAgent = navigator.userAgent;

      // Validate prompt
      const promptValidation = validatePrompt(prompt);
      if (!promptValidation.isValid) {
        throw new Error(promptValidation.reason);
      }

      // Check rate limit
      const rateLimit = await checkRateLimit(ipAddress);
      if (!rateLimit.allowed) {
        const resetTime = new Date(rateLimit.resetTime);
        const hoursUntilReset = (resetTime.getTime() - Date.now()) / (1000 * 60 * 60);
        
        throw new Error(
          `Daily limit reached (${rateLimit.requestsUsed}/${rateLimit.requestsUsed + rateLimit.requestsRemaining}). ` +
          `Please try again in ${hoursUntilReset.toFixed(1)} hours.`
        );
      }

      // Make request to Supabase Edge Function
      const response = await this.callSupabaseFunction('generate-encounter', {
        prompt,
        model,
        ipAddress,
        userAgent
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();

      // Record the request
      await recordRequest(ipAddress, userAgent, prompt, model);

      // Validate response
      const validatedResponse = AIEncounterResponseSchema.parse(data);
      
      return validatedResponse;
    } catch (error) {
      console.error("Supabase proxy error:", error);
      throw error;
    }
  }

  /**
   * Call Supabase Edge Function
   */
  private async callSupabaseFunction(functionName: string, payload: any): Promise<Response> {
    if (!supabase) {
      throw new Error("Supabase not configured");
    }

    // Call Supabase Edge Function
    const { data, error } = await supabase.functions.invoke(functionName, {
      body: payload
    });

    if (error) {
      throw new Error(`Supabase function error: ${error.message}`);
    }

    // Return mock response for now (until Edge Functions are set up)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  /**
   * Get usage statistics
   */
  async getUsageStats(): Promise<{
    requestsUsed: number;
    requestsRemaining: number;
    resetTime: string;
    canMakeRequest: boolean;
  }> {
    const ipAddress = await getUserIP();
    return getUsageStats(ipAddress);
  }

  /**
   * Check if proxy is available
   */
  isAvailable(): boolean {
    return !!supabase;
  }
}

// Singleton instance
export const supabaseProxyService = new SupabaseProxyService();