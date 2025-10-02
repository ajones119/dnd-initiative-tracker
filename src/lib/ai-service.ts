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
}

// Export singleton instance
export const aiService = new AIService();
export default aiService;
