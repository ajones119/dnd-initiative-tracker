import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { Sparkles, Send, Loader2, Wand2 } from "lucide-react";
import { aiService } from "../lib/ai-service";
import { AI_PROMPT_EXAMPLES } from "../lib/ai-schemas";
import { useInitiativeTracker } from "./InitiativeTrackerContext";
import { useSettings } from "../hooks/useSettings";
import { isAIAvailable } from "../lib/settings";
import { getUsageStats } from "../lib/rate-limiter";
import type { AIInitiativeResponse } from "../lib/ai-schemas";

export const AIAssistant: React.FC = () => {
  const { addInitiativeRow } = useInitiativeTracker();
  const { settings, getCurrentApiKey } = useSettings();
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastResponse, setLastResponse] = useState<AIInitiativeResponse | null>(
    null,
  );
  const [usageStats, setUsageStats] = useState<any>(null);

  // Update usage stats when component mounts or settings change
  React.useEffect(() => {
    if (settings.aiModel === 'groq') {
      const stats = getUsageStats();
      setUsageStats(stats);
    }
  }, [settings.aiModel]);

  // Don't render if AI is not available
  if (!isAIAvailable(settings)) {
    return null;
  }

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const apiKey = await getCurrentApiKey(settings.aiModel);
      const response = await aiService.generateInitiativeData(
        prompt,
        settings.aiModel,
        apiKey,
      );
      setLastResponse(response);

      // Add each creature to the initiative tracker
      response.creatures.forEach((creature) => {
        addInitiativeRow({
          name: creature.name,
          initiative: creature.initiative || 0,
          hp: creature.hp,
          maxHp: creature.maxHp,
          ac: creature.ac,
          speed: creature.speed,
          notes: creature.notes,
          actions: creature.actions,
          statusConditions: [],
        });
      });

      // Update usage stats for Groq
      if (settings.aiModel === 'groq') {
        const stats = getUsageStats();
        setUsageStats(stats);
      }

      setPrompt("");
      setOpen(false);
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert(
        `AI Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const useExample = (example: string) => {
    setPrompt(example);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-300 hover:from-purple-500/20 hover:to-blue-500/20"
        >
          <Sparkles className="h-4 w-4 text-purple-500" />
          AI Assistant
          {usageStats && settings.aiModel === 'groq' && (
            <Badge variant="secondary" className="ml-1 text-xs">
              {usageStats.requestsUsed}/{usageStats.requestsUsed + usageStats.requestsRemaining}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-96 p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-purple-500" />
            <h3 className="font-semibold text-lg">AI Initiative Assistant</h3>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Describe what you want to add:
            </label>
            <div className="flex gap-2">
              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create 3 goblins and 1 hobgoblin for combat..."
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleGenerate();
                  }
                }}
              />
              <Button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                size="sm"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Quick Examples:
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(AI_PROMPT_EXAMPLES).map(([key, example]) => (
                <Badge
                  key={key}
                  variant="secondary"
                  className="cursor-pointer hover:bg-purple-100 text-xs"
                  onClick={() => useExample(example)}
                >
                  {key}
                </Badge>
              ))}
            </div>
          </div>

          {lastResponse && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                ✅ Added {lastResponse.creatures.length} creature(s) to
                initiative!
              </p>
              {lastResponse.explanation && (
                <p className="text-xs text-green-600 mt-1">
                  {lastResponse.explanation}
                </p>
              )}
            </div>
          )}

          <div className="text-xs text-gray-500 border-t pt-2">
            💡 Try: "Add 4 level 5 adventurers", "Create a dragon encounter",
            "Generate tavern NPCs"
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
