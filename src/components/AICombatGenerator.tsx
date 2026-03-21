import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Wand2 } from "lucide-react";
import { useInitiativeTracker } from "./InitiativeTrackerContext";
import { useEncountersStorage } from "./EncountersStorageContext";

export const AICombatGenerator: React.FC = () => {
  const {
    combatDescription,
    setCombatDescription,
    encounterDescription,
    isGeneratingEncounter,
    generateEncounter,
  } = useInitiativeTracker();
  const { setCurrentEncounterId } = useEncountersStorage();

  const handleGenerate = async () => {
    await generateEncounter();
    setCurrentEncounterId(null);
  };

  return (
    <div className="mt-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Combat Description</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Describe your encounter and let AI generate creatures, combat
          mechanics, and tactics. Be specific about the setting, number of
          enemies, environmental hazards, and any special conditions.
        </p>
      </div>

      {encounterDescription && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            Generated Encounter
          </h4>
          <div className="text-sm text-blue-800 whitespace-pre-line">
            {encounterDescription}
          </div>
        </div>
      )}

      <div className="space-y-3">
        <Textarea
          value={combatDescription}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCombatDescription(e.target.value)
          }
          placeholder="Describe the encounter you want to create... (e.g., 'A group of bandits ambush the party on a narrow bridge over a raging river. The bridge is old and creaky, and there are barrels of oil that could catch fire.')"
          className="w-full min-h-[120px] p-3 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        />

        <Button
          variant="outline"
          onClick={handleGenerate}
          disabled={isGeneratingEncounter || !combatDescription.trim()}
          className="flex items-center gap-2"
        >
          <Wand2
            className={`h-4 w-4 ${isGeneratingEncounter ? "animate-spin" : ""}`}
          />
          {isGeneratingEncounter ? "Generating..." : "Generate Encounter"}
        </Button>
      </div>
    </div>
  );
};
