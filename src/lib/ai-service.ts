import {
  AIInitiativeResponseSchema,
  AIEncounterResponseSchema,
  type AIInitiativeResponse,
  type AIEncounterResponse,
} from "./ai-schemas";

const OPENAI_PROXY_URL = 'https://lszxzurqekrmhjipgrqc.supabase.co/functions/v1/openai-chat-proxy';

class AIService {
  constructor() {
    // No initialization needed - using public edge function
  }

  async generateInitiativeData(
    prompt: string,
  ): Promise<AIInitiativeResponse> {
    return this.generateWithOpenAI(prompt);
  }

  async generateFullEncounter(
    prompt: string,
  ): Promise<AIEncounterResponse> {
    return this.generateEncounterWithOpenAI(prompt);
  }

  private async generateWithOpenAI(
    prompt: string,
  ): Promise<AIInitiativeResponse> {
    try {
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

      const requestBody = {
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
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 2000,
      };

      const res = await fetch(OPENAI_PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(`OpenAI proxy error: ${data.error || JSON.stringify(data)}`);
      }

      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("No response from OpenAI");

      return this.parseAndValidateResponse(content);
    } catch (error) {
      console.error("OpenAI Error:", error);
      throw new Error(
        `OpenAI failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
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
  ): Promise<AIEncounterResponse> {
    try {
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

      const requestBody = {
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
        model: "gpt-4o-mini",
        temperature: 0.8,
        max_tokens: 3000,
      };

      const res = await fetch(OPENAI_PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(`OpenAI proxy error: ${data.error || JSON.stringify(data)}`);
      }

      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("No response from OpenAI");

      return this.parseAndValidateEncounterResponse(content);
    } catch (error) {
      console.error("OpenAI Encounter Error:", error);
      throw new Error(
        `OpenAI encounter generation failed: ${error instanceof Error ? error.message : "Unknown error"}`,
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
