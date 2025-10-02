import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerClose,
} from "./ui/drawer";
import {
  BookOpen,
  X,
  Save,
  Trash2,
  Copy,
  Plus,
  Calendar,
  Users,
  Play,
  RotateCcw,
} from "lucide-react";
import { useEncounters } from "../hooks/useEncounters";
import { getEncounterSummary, type Encounter } from "../lib/encounters";
import type { InitiativeRow } from "./InitiativeTrackerContext";

interface EncounterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentEncounterName: string;
  onEncounterNameChange: (name: string) => void;
  currentEncounterId: string | null;
  creatures: InitiativeRow[];
  currentTurn: number;
  currentRound: number;
  onLoadEncounter: (encounter: Encounter) => void;
  onNewEncounter: () => void;
  onSaveEncounter: (encounterId: string) => void;
  aiDescription?: string;
  combatMechanics?: Array<{
    name: string;
    description: string;
    trigger?: string;
  }>;
  tactics?: string;
}

export const EncounterDrawer: React.FC<EncounterDrawerProps> = ({
  open,
  onOpenChange,
  currentEncounterName,
  onEncounterNameChange,
  currentEncounterId,
  creatures,
  currentTurn,
  currentRound,
  onLoadEncounter,
  onNewEncounter,
  onSaveEncounter,
  aiDescription,
  combatMechanics,
  tactics,
}) => {
  const {
    encounters,
    saveEncounter,
    updateExistingEncounter,
    deleteEncounter,
    duplicateEncounter,
    clearAllEncounters,
  } = useEncounters();

  const [saveAsName, setSaveAsName] = useState("");
  const [saveAsDescription, setSaveAsDescription] = useState("");

  const handleSaveCurrent = () => {
    const name = currentEncounterName.trim() || "Untitled Encounter";

    if (currentEncounterId) {
      // Update existing encounter
      updateExistingEncounter(currentEncounterId, {
        name,
        creatures,
        currentTurn,
        currentRound,
        aiDescription,
        combatMechanics,
        tactics,
      });
    } else {
      // Create new encounter
      const newEncounter = saveEncounter(
        name,
        creatures,
        "",
        currentTurn,
        currentRound,
        aiDescription,
        combatMechanics,
        tactics,
      );
      onSaveEncounter(newEncounter.id);
    }

    onEncounterNameChange(name);
    onOpenChange(false);
  };

  const handleSaveAs = () => {
    if (!saveAsName.trim()) return;

    const newEncounter = saveEncounter(
      saveAsName.trim(),
      creatures,
      saveAsDescription.trim(),
      currentTurn,
      currentRound,
      aiDescription,
      combatMechanics,
      tactics,
    );

    setSaveAsName("");
    setSaveAsDescription("");
    onEncounterNameChange(newEncounter.name);
    onOpenChange(false);
  };

  const handleLoadEncounter = (encounter: Encounter) => {
    onLoadEncounter(encounter);
    onOpenChange(false);
  };

  const handleDeleteEncounter = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteEncounter(id);
    }
  };

  const handleDuplicateEncounter = (id: string, name: string) => {
    duplicateEncounter(id, `${name} (Copy)`);
  };

  const handleNewEncounter = () => {
    onNewEncounter();
    onOpenChange(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="w-96">
        <DrawerHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <DrawerTitle>Encounters</DrawerTitle>
          </div>
          <DrawerClose
            asChild
            className="hover:scale-102 absolute right-0 top-0"
          >
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Current Encounter Actions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm text-gray-700">
                Current Encounter
              </h3>
              {currentEncounterId && (
                <Badge variant="secondary" className="text-xs">
                  Loaded
                </Badge>
              )}
            </div>

            <div className="space-y-2">
              <Button
                onClick={handleSaveCurrent}
                className="w-full justify-start"
                variant="outline"
              >
                <Save className="h-4 w-4 mr-2" />
                {currentEncounterId
                  ? "Update Encounter"
                  : "Save Current Encounter"}
              </Button>

              <Button
                onClick={handleNewEncounter}
                className="w-full justify-start"
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Start New Encounter
              </Button>
            </div>
          </div>

          {/* Save As Section */}
          <div className="space-y-3 border-t pt-4">
            <h3 className="font-medium text-sm text-gray-700">Save As New</h3>

            <div className="space-y-2">
              <Input
                value={saveAsName}
                onChange={(e) => setSaveAsName(e.target.value)}
                placeholder="Encounter name..."
                className="text-sm"
              />
              <Input
                value={saveAsDescription}
                onChange={(e) => setSaveAsDescription(e.target.value)}
                placeholder="Description (optional)..."
                className="text-sm"
              />
              <Button
                onClick={handleSaveAs}
                disabled={!saveAsName.trim()}
                className="w-full"
                size="sm"
              >
                <Save className="h-4 w-4 mr-2" />
                Save As New
              </Button>
            </div>
          </div>

          {/* Saved Encounters */}
          <div className="space-y-3 border-t pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm text-gray-700">
                Saved Encounters ({encounters.length})
              </h3>
              {encounters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (window.confirm("Delete all saved encounters?")) {
                      clearAllEncounters();
                    }
                  }}
                  className="text-red-600 hover:text-red-700 h-6 px-2"
                >
                  Clear All
                </Button>
              )}
            </div>

            {encounters.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No saved encounters yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {encounters.map((encounter) => (
                  <div
                    key={encounter.id}
                    className={`p-3 border rounded-lg hover:bg-gray-50 transition-colors ${
                      encounter.id === currentEncounterId
                        ? "border-blue-500 bg-blue-50"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {encounter.name}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">
                          {getEncounterSummary(encounter)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 ml-2">
                        <Badge variant="secondary" className="text-xs">
                          R{encounter.currentRound}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {formatDate(encounter.updatedAt)}
                        <Users className="h-3 w-3 ml-2" />
                        {encounter.creatures.length}
                      </div>

                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLoadEncounter(encounter)}
                          className="h-6 w-6 p-0"
                          title="Load encounter"
                        >
                          <Play className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleDuplicateEncounter(
                              encounter.id,
                              encounter.name,
                            )
                          }
                          className="h-6 w-6 p-0"
                          title="Duplicate encounter"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleDeleteEncounter(encounter.id, encounter.name)
                          }
                          className="h-6 w-6 p-0 text-red-600 hover:text-red-700"
                          title="Delete encounter"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <DrawerFooter className="border-t ">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full"
          >
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
