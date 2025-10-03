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

  // Helper method to check available Gemini models
  async checkAvailableGeminiModels(apiKey: string): Promise<string[]> {
    try {
      this.initializeGemini(apiKey);
      if (!this.gemini) throw new Error("Failed to initialize Gemini");

      // Try to list available models
      const models = await this.gemini.listModels();
      return models.map(model => model.name);
    } catch (error) {
      console.error("Error checking Gemini models:", error);
      return [];
    }
  }

  // Helper method to test a specific Gemini model
  async testGeminiModel(apiKey: string, modelName: string): Promise<boolean> {
    try {
      this.initializeGemini(apiKey);
      if (!this.gemini) return false;

      const model = this.gemini.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Test");
      await result.response;
      return true;
    } catch (error) {
      console.error(`Error testing model ${modelName}:`, error);
      return false;
    }
  }

  // Diagnostic method to help troubleshoot Gemini API issues
  async diagnoseGeminiAPI(apiKey: string): Promise<{
    isValid: boolean;
    availableModels: string[];
    workingModels: string[];
    errors: string[];
  }> {
    const result = {
      isValid: false,
      availableModels: [] as string[],
      workingModels: [] as string[],
      errors: [] as string[]
    };

    try {
      // Test API key validity
      this.initializeGemini(apiKey);
      if (!this.gemini) {
        result.errors.push("Failed to initialize Gemini client");
        return result;
      }

      // Try to list available models
      try {
        const models = await this.gemini.listModels();
        result.availableModels = models.map(model => model.name);
        result.isValid = true;
      } catch (error) {
        result.errors.push(`Failed to list models: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }

      // Test common models (updated for current API)
      const modelsToTest = [
        "gemini-2.0-flash-exp",
        "gemini-2.0-flash-thinking-exp",
        "gemini-1.0-pro",
        "gemini-pro"
      ];

      for (const modelName of modelsToTest) {
        try {
          const isWorking = await this.testGeminiModel(apiKey, modelName);
          if (isWorking) {
            result.workingModels.push(modelName);
          }
        } catch (error) {
          result.errors.push(`${modelName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }

    } catch (error) {
      result.errors.push(`API initialization failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return result;
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
    } else if (model === "groq") {
      return this.generateWithGroq(prompt);
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
    } else if (model === "groq") {
      return this.generateEncounterWithGroq(prompt);
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

      const systemPrompt = `Greetings, fellow adventurer! 🎲✨ I'm your whimsical D&D assistant, here to help you populate your initiative tracker with all sorts of marvelous creatures and characters!

I absolutely love bringing D&D encounters to life, and I'll make sure each creature I generate has just the right stats to make your combat both challenging and fun. Here's how I work my magic:

🌟 My Guidelines (with a sprinkle of fairy dust):
- I ALWAYS use official D&D 5e monster stats when applicable (because consistency is magical and players expect it!)
- For custom creatures, I base stats on similar official monsters and adjust appropriately
- For player characters, I craft reasonable stats that match their level and class
- Initiative rolls are realistic (usually 1-25, because even dragons can have off days)
- HP matches the creature type and CR/level (no cheating with inflated numbers!)
- AC is appropriate for the creature (armor is important, you know!)
- Speed is in feet (usually 25-40 for most creatures, though some are surprisingly spry)
- I add helpful notes about special abilities and tactics (because every creature has their own personality!)
- When in doubt, I default to official D&D 5e sources like the Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.

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

      const fullPrompt = `Greetings, fellow adventurer! 🎲✨ I'm your whimsical D&D assistant, here to help you populate your initiative tracker with all sorts of marvelous creatures and characters!

I absolutely love bringing D&D encounters to life, and I'll make sure each creature I generate has just the right stats to make your combat both challenging and fun. Here's how I work my magic:

🌟 My Guidelines (with a sprinkle of fairy dust):
- I ALWAYS use official D&D 5e monster stats when applicable (because consistency is magical and players expect it!)
- For custom creatures, I base stats on similar official monsters and adjust appropriately
- For player characters, I craft reasonable stats that match their level and class
- Initiative rolls are realistic (usually 1-25, because even dragons can have off days)
- HP matches the creature type and CR/level (no cheating with inflated numbers!)
- AC is appropriate for the creature (armor is important, you know!)
- Speed is in feet (usually 25-40 for most creatures, though some are surprisingly spry)
- I add helpful notes about special abilities and tactics (because every creature has their own personality!)
- When in doubt, I default to official D&D 5e sources like the Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.

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
      // Updated for current API - these are the free tier models
      const modelOptions = [
        "gemini-2.0-flash-exp", // Fast, free tier model
        "gemini-2.0-flash-thinking-exp", // Enhanced reasoning, free tier
        "gemini-1.0-pro", // Stable fallback
        "gemini-pro", // Legacy fallback
        // Note: Gemini 1.5 models require paid tier
      ];

      let result;
      let lastError;

      for (const modelName of modelOptions) {
        try {
          const model = this.gemini.getGenerativeModel({
            model: modelName,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000,
            },
          });

          // Test the model by actually trying to generate content
          result = await model.generateContent(fullPrompt);
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
            "Invalid Gemini API key. Please check your API key in settings. Make sure it starts with 'AIza' and is 39 characters long.",
          );
        }
        if (error.message.includes("PERMISSION_DENIED")) {
          throw new Error(
            "Permission denied. Your API key may not have access to Gemini 1.5 models. Try enabling billing in Google AI Studio or use an older model.",
          );
        }
        if (error.message.includes("QUOTA_EXCEEDED")) {
          throw new Error(
            "Gemini API quota exceeded. Please check your usage limits or enable billing.",
          );
        }
        if (error.message.includes("INVALID_ARGUMENT")) {
          throw new Error(
            "Invalid model or region restriction. Try using 'gemini-2.0-flash-exp' or 'gemini-pro' instead.",
          );
        }
        if (error.message.includes("NOT_FOUND")) {
          throw new Error(
            "Model not found. The requested Gemini model may not be available. Try using 'gemini-2.0-flash-exp' or 'gemini-pro' as a fallback.",
          );
        }
        throw new Error(`Gemini failed: ${error.message}`);
      }

      throw new Error("Gemini failed: Unknown error");
    }
  }

  private parseAndValidateResponse(content: string): AIInitiativeResponse {

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

    const validatedResponse = AIInitiativeResponseSchema.parse(jsonResponse);

    return validatedResponse;
  }

  private async generateWithGroq(
    prompt: string,
  ): Promise<AIInitiativeResponse> {
    try {
      const GROQ_API_KEY = "xai-4VYWLJHpbvsMQhA2IRk9MWm6AbPGCbe39LiL9SYXeGITeAqoyCwzfBoAawZVqvml9OZNyyGXA1QDXQNL";

      const systemPrompt = `Greetings, fellow adventurer! 🎲✨ I'm your whimsical D&D assistant, here to help you populate your initiative tracker with all sorts of marvelous creatures and characters!

I absolutely love bringing D&D encounters to life, and I'll make sure each creature I generate has just the right stats to make your combat both challenging and fun. Here's how I work my magic:

🌟 My Guidelines (with a sprinkle of fairy dust):
- I ALWAYS use official D&D 5e monster stats when applicable (because consistency is magical and players expect it!)
- For custom creatures, I base stats on similar official monsters and adjust appropriately
- For player characters, I craft reasonable stats that match their level and class
- Initiative rolls are realistic (usually 1-25, because even dragons can have off days)
- HP matches the creature type and CR/level (no cheating with inflated numbers!)
- AC is appropriate for the creature (armor is important, you know!)
- Speed is in feet (usually 25-40 for most creatures, though some are surprisingly spry)
- I add helpful notes about special abilities and tactics (because every creature has their own personality!)
- When in doubt, I default to official D&D 5e sources like the Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.

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

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
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
          temperature: 0.7,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) throw new Error("No response from Groq");

      return this.parseAndValidateResponse(content);
    } catch (error) {
      console.error("Groq Error:", error);
      throw new Error(
        `Groq failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  private async generateEncounterWithOpenAI(
    prompt: string,
    apiKey: string,
  ): Promise<AIEncounterResponse> {
    try {
      this.initializeOpenAI(apiKey);
      if (!this.openai) throw new Error("Failed to initialize OpenAI");

      const systemPrompt = `Greetings, fellow Dungeon Master! 🎭✨ I'm your whimsical encounter architect, and I absolutely LOVE crafting immersive, dynamic combat encounters that will have your players on the edge of their seats!

I specialize in creating encounters that go far beyond simple "fight until dead" scenarios. Here's what I bring to the table (pun intended! 🎲):

🌟 My Encounter Creation Magic:
1. **Official D&D Monsters First** - I ALWAYS use official D&D 5e monsters when applicable, drawing from the Monster Manual, Volo's Guide, Mordenkainen's Tome, and other official sources
2. **Rich Atmospheric Descriptions** - I paint vivid pictures with words, describing the setting, mood, lighting, sounds, and atmosphere that will transport your players into the scene
3. **Dynamic Combat Mechanics** - I design special rules, environmental hazards, and interactive elements that make each round feel unique and strategic
4. **Tactical Terrain & Cover** - I suggest specific cover opportunities, elevation changes, and tactical positioning that both players and enemies can exploit
5. **Clever Traps & Hazards** - When appropriate, I include traps, environmental dangers, and interactive elements that add layers of strategy
6. **Engaging Objectives** - I create goals beyond just "kill everything" - rescue missions, item retrieval, area control, or time-sensitive challenges
7. **Creature Synergy** - I design creature combinations that work together tactically, creating memorable and challenging encounters

I believe every encounter should tell a story and create moments your players will remember! 🏰⚔️

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "encounterName": "Creative Encounter Name",
  "description": "VIVID atmospheric description including setting, mood, lighting, sounds, and atmosphere. Paint a picture that transports players into the scene!",
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities, role in encounter, and tactical behavior",
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
      "description": "Detailed explanation of how this mechanic works, including specific rules and effects",
      "trigger": "When this activates (be specific about timing and conditions)"
    }
  ],
  "tactics": "Comprehensive tactical advice including creature behavior, environmental usage, cover suggestions, trap interactions, and encounter flow"
}

🌟 SPECIAL EMPHASIS REQUIRED:
- Use OFFICIAL D&D 5e monsters whenever possible (Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.)
- Make the description RICH and ATMOSPHERIC - include sensory details!
- Include specific COVER opportunities and tactical positioning
- Suggest TRAPS or environmental hazards when appropriate
- Design mechanics that create dynamic, changing combat
- Consider objectives beyond just "kill everything"
- All numeric fields should be numbers, not strings
- Do not include any text outside the JSON object.`;

      const completion = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `Create a D&D encounter: ${prompt}

🎲 Let your creativity shine! I want to see:
- Vivid atmospheric descriptions that paint a picture
- Dynamic combat mechanics that change the battlefield
- Specific cover opportunities and tactical positioning
- Traps or environmental hazards when they make sense
- Objectives that go beyond just "kill everything"
- Creature combinations that work together tactically

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

      const fullPrompt = `Greetings, fellow Dungeon Master! 🎭✨ I'm your whimsical encounter architect, and I absolutely LOVE crafting immersive, dynamic combat encounters that will have your players on the edge of their seats!

I specialize in creating encounters that go far beyond simple "fight until dead" scenarios. Here's what I bring to the table (pun intended! 🎲):

🌟 My Encounter Creation Magic:
1. **Official D&D Monsters First** - I ALWAYS use official D&D 5e monsters when applicable, drawing from the Monster Manual, Volo's Guide, Mordenkainen's Tome, and other official sources
2. **Rich Atmospheric Descriptions** - I paint vivid pictures with words, describing the setting, mood, lighting, sounds, and atmosphere that will transport your players into the scene
3. **Dynamic Combat Mechanics** - I design special rules, environmental hazards, and interactive elements that make each round feel unique and strategic
4. **Tactical Terrain & Cover** - I suggest specific cover opportunities, elevation changes, and tactical positioning that both players and enemies can exploit
5. **Clever Traps & Hazards** - When appropriate, I include traps, environmental dangers, and interactive elements that add layers of strategy
6. **Engaging Objectives** - I create goals beyond just "kill everything" - rescue missions, item retrieval, area control, or time-sensitive challenges
7. **Creature Synergy** - I design creature combinations that work together tactically, creating memorable and challenging encounters

I believe every encounter should tell a story and create moments your players will remember! 🏰⚔️

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "encounterName": "Creative Encounter Name",
  "description": "VIVID atmospheric description including setting, mood, lighting, sounds, and atmosphere. Paint a picture that transports players into the scene!",
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities, role in encounter, and tactical behavior",
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
      "description": "Detailed explanation of how this mechanic works, including specific rules and effects",
      "trigger": "When this activates (be specific about timing and conditions)"
    }
  ],
  "tactics": "Comprehensive tactical advice including creature behavior, environmental usage, cover suggestions, trap interactions, and encounter flow"
}

🌟 SPECIAL EMPHASIS REQUIRED:
- Use OFFICIAL D&D 5e monsters whenever possible (Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.)
- Make the description RICH and ATMOSPHERIC - include sensory details!
- Include specific COVER opportunities and tactical positioning
- Suggest TRAPS or environmental hazards when appropriate
- Design mechanics that create dynamic, changing combat
- Consider objectives beyond just "kill everything"
- All numeric fields should be numbers, not strings

User request: Create a D&D encounter: ${prompt}

🎲 Let your creativity shine! I want to see:
- Official D&D monsters from official sources when applicable
- Vivid atmospheric descriptions that paint a picture
- Dynamic combat mechanics that change the battlefield
- Specific cover opportunities and tactical positioning
- Traps or environmental hazards when they make sense
- Objectives that go beyond just "kill everything"
- Creature combinations that work together tactically

Return ONLY the JSON object.`;

      // Try different Gemini models in order of preference
      // Updated for current API - these are the free tier models
      const modelOptions = [
        "gemini-2.0-flash-exp", // Fast, free tier model
        "gemini-2.0-flash-thinking-exp", // Enhanced reasoning, free tier
        "gemini-1.0-pro", // Stable fallback
        "gemini-pro", // Legacy fallback
        // Note: Gemini 1.5 models require paid tier
      ];

      let result;
      let lastError;

      for (const modelName of modelOptions) {
        try {
          const model = this.gemini.getGenerativeModel({
            model: modelName,
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 3000,
            },
          });

          result = await model.generateContent(fullPrompt);
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

    const validatedResponse = AIEncounterResponseSchema.parse(jsonResponse);

    return validatedResponse;
  }

  private async generateEncounterWithGroq(
    prompt: string,
  ): Promise<AIEncounterResponse> {
    try {
      const GROQ_API_KEY = "xai-4VYWLJHpbvsMQhA2IRk9MWm6AbPGCbe39LiL9SYXeGITeAqoyCwzfBoAawZVqvml9OZNyyGXA1QDXQNL";

      const systemPrompt = `Greetings, fellow Dungeon Master! 🎭✨ I'm your whimsical encounter architect, and I absolutely LOVE crafting immersive, dynamic combat encounters that will have your players on the edge of their seats!

I specialize in creating encounters that go far beyond simple "fight until dead" scenarios. Here's what I bring to the table (pun intended! 🎲):

🌟 My Encounter Creation Magic:
1. **Official D&D Monsters First** - I ALWAYS use official D&D 5e monsters when applicable, drawing from the Monster Manual, Volo's Guide, Mordenkainen's Tome, and other official sources
2. **Rich Atmospheric Descriptions** - I paint vivid pictures with words, describing the setting, mood, lighting, sounds, and atmosphere that will transport your players into the scene
3. **Dynamic Combat Mechanics** - I design special rules, environmental hazards, and interactive elements that make each round feel unique and strategic
4. **Tactical Terrain & Cover** - I suggest specific cover opportunities, elevation changes, and tactical positioning that both players and enemies can exploit
5. **Clever Traps & Hazards** - When appropriate, I include traps, environmental dangers, and interactive elements that add layers of strategy
6. **Engaging Objectives** - I create goals beyond just "kill everything" - rescue missions, item retrieval, area control, or time-sensitive challenges
7. **Creature Synergy** - I design creature combinations that work together tactically, creating memorable and challenging encounters

I believe every encounter should tell a story and create moments your players will remember! 🏰⚔️

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "encounterName": "Creative Encounter Name",
  "description": "VIVID atmospheric description including setting, mood, lighting, sounds, and atmosphere. Paint a picture that transports players into the scene!",
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities, role in encounter, and tactical behavior",
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
      "description": "Detailed explanation of how this mechanic works, including specific rules and effects",
      "trigger": "When this activates (be specific about timing and conditions)"
    }
  ],
  "tactics": "Comprehensive tactical advice including creature behavior, environmental usage, cover suggestions, trap interactions, and encounter flow"
}

🌟 SPECIAL EMPHASIS REQUIRED:
- Use OFFICIAL D&D 5e monsters whenever possible (Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.)
- Make the description RICH and ATMOSPHERIC - include sensory details!
- Include specific COVER opportunities and tactical positioning
- Suggest TRAPS or environmental hazards when appropriate
- Design mechanics that create dynamic, changing combat
- Consider objectives beyond just "kill everything"
- All numeric fields should be numbers, not strings
- Do not include any text outside the JSON object.`;

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Create a D&D encounter: ${prompt}

🎲 Let your creativity shine! I want to see:
- Official D&D monsters from official sources when applicable
- Vivid atmospheric descriptions that paint a picture
- Dynamic combat mechanics that change the battlefield
- Specific cover opportunities and tactical positioning
- Traps or environmental hazards when they make sense
- Objectives that go beyond just "kill everything"
- Creature combinations that work together tactically

Return ONLY the JSON object.`,
            },
          ],
          temperature: 0.8,
          max_tokens: 3000,
        }),
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) throw new Error("No response from Groq");

      return this.parseAndValidateEncounterResponse(content);
    } catch (error) {
      console.error("Groq Encounter Error:", error);
      throw new Error(
        `Groq encounter generation failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }
}

// Export singleton instance
export const aiService = new AIService();
export default aiService;
