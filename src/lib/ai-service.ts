import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  AIInitiativeResponseSchema,
  AIEncounterResponseSchema,
  type AIInitiativeResponse,
  type AIEncounterResponse,
} from "./ai-schemas";
import { type AIModel } from "./settings";

class AIService {
  private openai: OpenAI | null = null;
  private gemini: GoogleGenerativeAI | null = null;

  constructor() {
    // Initialize with empty instances - will be configured when needed
  }

  private initializeOpenAI(apiKey: string) {
    this.openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  private initializeGemini(apiKey: string) {
    this.gemini = new GoogleGenerativeAI(apiKey);
  }

  async generateInitiativeData(
    prompt: string,
    model: AIModel,
    apiKey: string,
  ): Promise<AIInitiativeResponse> {
    if (model === "none") {
      throw new Error("AI model is disabled");
    }

    if (model === "openai") {
      return this.generateWithOpenAI(prompt, apiKey);
    } else if (model === "gemini") {
      return this.generateWithGemini(prompt, apiKey);
    }

    throw new Error(`Unsupported AI model: ${model}`);
  }

  async generateFullEncounter(
    prompt: string,
    model: AIModel,
    apiKey: string,
  ): Promise<AIEncounterResponse> {
    if (model === "none") {
      throw new Error("AI model is disabled");
    }

    if (model === "openai") {
      return this.generateEncounterWithOpenAI(prompt, apiKey);
    } else if (model === "gemini") {
      return this.generateEncounterWithGemini(prompt, apiKey);
    }

    throw new Error(`Unsupported AI model: ${model}`);
  }

  private async generateWithOpenAI(
    prompt: string,
    apiKey: string,
  ): Promise<AIInitiativeResponse> {
    try {
      this.initializeOpenAI(apiKey);
      if (!this.openai) throw new Error("Failed to initialize OpenAI");

      const systemPrompt = `You are a D&D 5e assistant helping to populate an initiative tracker. 

Generate creatures/characters based on the user's request with appropriate D&D 5e stats.

Guidelines:
- Use official D&D 5e monster stats when possible
- For player characters, use reasonable stats for their level/class
- Initiative should be realistic (usually 1-25)
- HP should match creature type and CR/level
- AC should be appropriate for the creature
- Speed is in feet (usually 25-40 for most creatures)
- Add helpful notes about special abilities or tactics

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities or tactics",
      "actions": [
        {
          "name": "Action Name",
          "description": "Full action description with attack bonus, damage, and effects"
        }
      ]
    }
  ],
  "explanation": "Brief explanation of what was generated"
}

The "creatures" array is REQUIRED and must contain at least one creature object.
All numeric fields (initiative, hp, maxHp, ac, speed) should be numbers, not strings.
The "actions" array should include the creature's main combat actions with full D&D 5e formatting.
Do not include any text outside the JSON object.`;

      const completion = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `${prompt}

Remember: Return ONLY a JSON object with the "creatures" array. Here's an example:
{
  "creatures": [
    {
      "name": "Goblin",
      "initiative": 12,
      "hp": 7,
      "maxHp": 7,
      "ac": 15,
      "speed": 30,
      "notes": "Nimble Escape ability"
    }
  ],
  "explanation": "Created a basic goblin"
}`,
          },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
        max_tokens: 2000,
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) throw new Error("No response from OpenAI");

      return this.parseAndValidateResponse(content);
    } catch (error) {
      console.error("OpenAI Error:", error);
      throw new Error(
        `OpenAI failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  private async generateWithGemini(
    prompt: string,
    apiKey: string,
  ): Promise<AIInitiativeResponse> {
    try {
      this.initializeGemini(apiKey);
      if (!this.gemini) throw new Error("Failed to initialize Gemini");

      const fullPrompt = `You are a D&D 5e assistant helping to populate an initiative tracker. 

Generate creatures/characters based on the user's request with appropriate D&D 5e stats.

Guidelines:
- Use official D&D 5e monster stats when possible
- For player characters, use reasonable stats for their level/class
- Initiative should be realistic (usually 1-25)
- HP should match creature type and CR/level
- AC should be appropriate for the creature
- Speed is in feet (usually 25-40 for most creatures)
- Add helpful notes about special abilities or tactics

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities or tactics",
      "actions": [
        {
          "name": "Action Name",
          "description": "Full action description with attack bonus, damage, and effects"
        }
      ]
    }
  ],
  "explanation": "Brief explanation of what was generated"
}

The "creatures" array is REQUIRED and must contain at least one creature object.
All numeric fields (initiative, hp, maxHp, ac, speed) should be numbers, not strings.
The "actions" array should include the creature's main combat actions with full D&D 5e formatting.
Do not include any text outside the JSON object.

User request: ${prompt}

Remember: Return ONLY a JSON object with the "creatures" array.`;

      // Try different Gemini models in order of preference
      const modelOptions = [
        "gemini-1.5-flash-latest",
        "gemini-1.5-flash",
        "gemini-1.5-pro-latest",
        "gemini-1.5-pro",
        // Note: gemini-pro is deprecated and removed from fallback list
      ];

      let result;
      let lastError;

      for (const modelName of modelOptions) {
        try {
          console.log(`Trying Gemini model: ${modelName}`);
          const model = this.gemini.getGenerativeModel({
            model: modelName,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000,
            },
          });

          // Test the model by actually trying to generate content
          result = await model.generateContent(fullPrompt);
          console.log(`Successfully used Gemini model: ${modelName}`);
          break;
        } catch (error) {
          console.warn(`Model ${modelName} failed:`, error);
          lastError = error;
          continue;
        }
      }

      if (!result) {
        const errorMsg = `No Gemini models are available for your API key. This could be due to:
• Your API key region doesn't support Gemini 1.5 models yet
• Your API key needs to be enabled for Gemini models
• Network connectivity issues

Please check:
1. Your API key is valid and active
2. Your region supports Gemini 1.5 models
3. Try again in a few minutes

Last error: ${lastError}`;
        throw new Error(errorMsg);
      }

      const response = await result.response;
      const content = response.text();

      if (!content) throw new Error("No response from Gemini");

      return this.parseAndValidateResponse(content);
    } catch (error) {
      console.error("Gemini Error:", error);

      // Provide more specific error messages
      if (error instanceof Error) {
        if (error.message.includes("API_KEY_INVALID")) {
          throw new Error(
            "Invalid Gemini API key. Please check your API key in settings.",
          );
        }
        if (error.message.includes("PERMISSION_DENIED")) {
          throw new Error(
            "Permission denied. Please check your Gemini API key permissions.",
          );
        }
        if (error.message.includes("QUOTA_EXCEEDED")) {
          throw new Error(
            "Gemini API quota exceeded. Please check your usage limits.",
          );
        }
        throw new Error(`Gemini failed: ${error.message}`);
      }

      throw new Error("Gemini failed: Unknown error");
    }
  }

  private parseAndValidateResponse(content: string): AIInitiativeResponse {
    console.log("Raw AI Response:", content);

    // Clean up the response - sometimes AI adds markdown formatting
    let cleanContent = content.trim();
    if (cleanContent.startsWith("```json")) {
      cleanContent = cleanContent
        .replace(/```json\n?/, "")
        .replace(/\n?```$/, "");
    }
    if (cleanContent.startsWith("```")) {
      cleanContent = cleanContent.replace(/```\n?/, "").replace(/\n?```$/, "");
    }

    const jsonResponse = JSON.parse(cleanContent);
    console.log("Parsed JSON:", jsonResponse);

    const validatedResponse = AIInitiativeResponseSchema.parse(jsonResponse);
    console.log("Validated Response:", validatedResponse);

    return validatedResponse;
  }

  private async generateEncounterWithOpenAI(
    prompt: string,
    apiKey: string,
  ): Promise<AIEncounterResponse> {
    try {
      this.initializeOpenAI(apiKey);
      if (!this.openai) throw new Error("Failed to initialize OpenAI");

      const systemPrompt = `You are a D&D 5e Dungeon Master creating immersive combat encounters.

Generate a complete encounter based on the user's description with:
1. Appropriate creatures with full D&D 5e stats and actions
2. Rich atmospheric description
3. Dynamic combat mechanics and environmental hazards
4. Tactical suggestions for running the encounter

Make encounters engaging with interesting terrain, objectives, and mechanics beyond just "fight until dead".

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "encounterName": "Creative Encounter Name",
  "description": "Rich description of the setting, atmosphere, and initial situation",
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities or role in encounter",
      "actions": [
        {
          "name": "Action Name",
          "description": "Full action description with attack bonus, damage, and effects"
        }
      ]
    }
  ],
  "combatMechanics": [
    {
      "name": "Mechanic Name",
      "description": "How this mechanic works and affects combat",
      "trigger": "When this activates (optional)"
    }
  ],
  "tactics": "Suggested tactics and strategies for running this encounter"
}

All numeric fields should be numbers, not strings.
Include interesting environmental hazards, objectives, and dynamic elements.
Do not include any text outside the JSON object.`;

      const completion = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `Create a D&D encounter: ${prompt}

Remember: Return ONLY a JSON object with the complete encounter structure.`,
          },
        ],
        response_format: { type: "json_object" },
        temperature: 0.8, // Higher creativity for encounters
        max_tokens: 3000, // More tokens for detailed encounters
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) throw new Error("No response from OpenAI");

      return this.parseAndValidateEncounterResponse(content);
    } catch (error) {
      console.error("OpenAI Encounter Error:", error);
      throw new Error(
        `OpenAI encounter generation failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  private async generateEncounterWithGemini(
    prompt: string,
    apiKey: string,
  ): Promise<AIEncounterResponse> {
    try {
      this.initializeGemini(apiKey);
      if (!this.gemini) throw new Error("Failed to initialize Gemini");

      const fullPrompt = `You are a D&D 5e Dungeon Master creating immersive combat encounters.

Generate a complete encounter based on the user's description with:
1. Appropriate creatures with full D&D 5e stats and actions
2. Rich atmospheric description  
3. Dynamic combat mechanics and environmental hazards
4. Tactical suggestions for running the encounter

Make encounters engaging with interesting terrain, objectives, and mechanics beyond just "fight until dead".

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "encounterName": "Creative Encounter Name",
  "description": "Rich description of the setting, atmosphere, and initial situation",
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities or role in encounter",
      "actions": [
        {
          "name": "Action Name",
          "description": "Full action description with attack bonus, damage, and effects"
        }
      ]
    }
  ],
  "combatMechanics": [
    {
      "name": "Mechanic Name",
      "description": "How this mechanic works and affects combat",
      "trigger": "When this activates (optional)"
    }
  ],
  "tactics": "Suggested tactics and strategies for running this encounter"
}

User request: Create a D&D encounter: ${prompt}

All numeric fields should be numbers, not strings.
Include interesting environmental hazards, objectives, and dynamic elements.
Return ONLY the JSON object.`;

      // Try different Gemini models in order of preference
      const modelOptions = [
        "gemini-1.5-flash-latest",
        "gemini-1.5-flash",
        "gemini-1.5-pro-latest",
        "gemini-1.5-pro",
      ];

      let result;
      let lastError;

      for (const modelName of modelOptions) {
        try {
          console.log(`Trying Gemini model for encounter: ${modelName}`);
          const model = this.gemini.getGenerativeModel({
            model: modelName,
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 3000,
            },
          });

          result = await model.generateContent(fullPrompt);
          console.log(
            `Successfully used Gemini model for encounter: ${modelName}`,
          );
          break;
        } catch (error) {
          console.warn(`Encounter model ${modelName} failed:`, error);
          lastError = error;
          continue;
        }
      }

      if (!result) {
        throw new Error(
          `No Gemini models worked for encounter generation. Last error: ${lastError}`,
        );
      }

      const response = await result.response;
      const content = response.text();

      if (!content) throw new Error("No response from Gemini");

      return this.parseAndValidateEncounterResponse(content);
    } catch (error) {
      console.error("Gemini Encounter Error:", error);
      throw new Error(
        `Gemini encounter generation failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  private parseAndValidateEncounterResponse(
    content: string,
  ): AIEncounterResponse {
    console.log("Raw AI Encounter Response:", content);

    // Clean up the response - sometimes AI adds markdown formatting
    let cleanContent = content.trim();
    if (cleanContent.startsWith("```json")) {
      cleanContent = cleanContent
        .replace(/```json\n?/, "")
        .replace(/\n?```$/, "");
    }
    if (cleanContent.startsWith("```")) {
      cleanContent = cleanContent.replace(/```\n?/, "").replace(/\n?```$/, "");
    }

    const jsonResponse = JSON.parse(cleanContent);
    console.log("Parsed Encounter JSON:", jsonResponse);

    const validatedResponse = AIEncounterResponseSchema.parse(jsonResponse);
    console.log("Validated Encounter Response:", validatedResponse);

    return validatedResponse;
  }
}

// Export singleton instance
export const aiService = new AIService();
export default aiService;
