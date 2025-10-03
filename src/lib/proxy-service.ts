/**
 * Proxy service for API key management
 * API keys are stored server-side and never exposed to the client
 */

import { type AIModel } from "./settings";

export interface ProxyApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ProxySettings {
  openaiApiKey?: string;
  geminiApiKey?: string;
  aiModel: AIModel;
}

/**
 * Proxy service for secure API key management
 */
class ProxyService {
  private baseUrl: string;

  constructor() {
    // In production, this would be your server endpoint
    this.baseUrl = import.meta.env.VITE_PROXY_URL || '/api/proxy';
  }

  /**
   * Save API keys to server (server stores them securely)
   */
  async saveApiKeys(keys: { openaiApiKey?: string; geminiApiKey?: string }): Promise<ProxyApiResponse<void>> {
    try {
      const response = await fetch(`${this.baseUrl}/api-keys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authentication token if needed
          'Authorization': `Bearer ${await this.getAuthToken()}`
        },
        body: JSON.stringify(keys)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Failed to save API keys:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get current AI model setting from server
   */
  async getCurrentModel(): Promise<ProxyApiResponse<AIModel>> {
    try {
      const response = await fetch(`${this.baseUrl}/settings/model`, {
        headers: {
          'Authorization': `Bearer ${await this.getAuthToken()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return { success: true, data: data.model };
    } catch (error) {
      console.error('Failed to get current model:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Set AI model on server
   */
  async setCurrentModel(model: AIModel): Promise<ProxyApiResponse<void>> {
    try {
      const response = await fetch(`${this.baseUrl}/settings/model`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await this.getAuthToken()}`
        },
        body: JSON.stringify({ model })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Failed to set model:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Generate AI content using server proxy (API keys never leave server)
   */
  async generateInitiativeData(prompt: string, model: AIModel): Promise<ProxyApiResponse<any>> {
    try {
      const response = await fetch(`${this.baseUrl}/ai/generate-initiative`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await this.getAuthToken()}`
        },
        body: JSON.stringify({ prompt, model })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Failed to generate initiative data:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Generate encounter data using server proxy
   */
  async generateEncounterData(prompt: string, model: AIModel): Promise<ProxyApiResponse<any>> {
    try {
      const response = await fetch(`${this.baseUrl}/ai/generate-encounter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await this.getAuthToken()}`
        },
        body: JSON.stringify({ prompt, model })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Failed to generate encounter data:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Check if API keys are configured on server
   */
  async checkApiKeysConfigured(): Promise<ProxyApiResponse<{ openai: boolean; gemini: boolean }>> {
    try {
      const response = await fetch(`${this.baseUrl}/api-keys/status`, {
        headers: {
          'Authorization': `Bearer ${await this.getAuthToken()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Failed to check API keys status:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Clear API keys from server
   */
  async clearApiKeys(): Promise<ProxyApiResponse<void>> {
    try {
      const response = await fetch(`${this.baseUrl}/api-keys`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${await this.getAuthToken()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Failed to clear API keys:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get authentication token (implement your auth system)
   */
  private async getAuthToken(): Promise<string> {
    // In a real implementation, this would get the user's auth token
    // For demo purposes, we'll use a placeholder
    return 'demo-auth-token';
  }

  /**
   * Check if proxy service is available
   */
  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`, {
        method: 'GET',
        timeout: 5000 // 5 second timeout
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get proxy service status
   */
  async getStatus(): Promise<{
    available: boolean;
    configured: boolean;
    openaiConfigured: boolean;
    geminiConfigured: boolean;
    warning: string;
  }> {
    const available = await this.isAvailable();
    
    if (!available) {
      return {
        available: false,
        configured: false,
        openaiConfigured: false,
        geminiConfigured: false,
        warning: "Proxy service is not available. API keys cannot be stored securely."
      };
    }

    const keysStatus = await this.checkApiKeysConfigured();
    
    if (!keysStatus.success) {
      return {
        available: true,
        configured: false,
        openaiConfigured: false,
        geminiConfigured: false,
        warning: "Failed to check API keys status from server."
      };
    }

    return {
      available: true,
      configured: keysStatus.data!.openai || keysStatus.data!.gemini,
      openaiConfigured: keysStatus.data!.openai,
      geminiConfigured: keysStatus.data!.gemini,
      warning: "Most secure option - API keys never leave the server."
    };
  }
}

// Singleton instance
export const proxyService = new ProxyService();