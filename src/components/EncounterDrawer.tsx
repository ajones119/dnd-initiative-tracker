import React, { useState, useRef, useEffect } from "react";
import { Drawer } from "vaul";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
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
  Download,
  Upload,
} from "lucide-react";
import { useEncountersStorage } from "./EncountersStorageContext";
import { useInitiativeTracker } from "./InitiativeTrackerContext";
import { getEncounterSummary } from "../lib/encounters";
import type { Encounter } from "../Types";

interface EncounterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EncounterDrawer: React.FC<EncounterDrawerProps> = ({
  open,
  onOpenChange,
}) => {
  const {
    encounters,
    currentEncounterId,
    setCurrentEncounterId,
    saveEncounter,
    updateExistingEncounter,
    deleteEncounter,
    duplicateEncounter,
    clearAllEncounters,
    exportEncounters,
    exportSingleEncounter,
    importEncounters,
  } = useEncountersStorage();

  const {
    initiativeRows: creatures,
    currentTurn,
    currentRound,
    encounterName: currentEncounterName,
    setEncounterName: onEncounterNameChange,
    aiDescription,
    combatMechanics,
    tactics,
    loadEncounter,
    newEncounter,
  } = useInitiativeTracker();

  const [saveAsName, setSaveAsName] = useState("");
  const [saveAsDescription, setSaveAsDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [drawerDirection, setDrawerDirection] = useState<
    "left" | "right" | "top" | "bottom"
  >("right");
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDrawerDirection(mq.matches ? "right" : "bottom");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
      const created = saveEncounter(
        name,
        creatures,
        "",
        currentTurn,
        currentRound,
        aiDescription,
        combatMechanics,
        tactics,
      );
      setCurrentEncounterId(created.id);
    }

    onEncounterNameChange(name);
    onOpenChange(false);
  };

  const handleSaveAs = () => {
    if (!saveAsName.trim()) return;

    const created = saveEncounter(
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
    onEncounterNameChange(created.name);
    setCurrentEncounterId(created.id);
    onOpenChange(false);
  };

  const handleLoadEncounter = (encounter: Encounter) => {
    loadEncounter(encounter);
    setCurrentEncounterId(encounter.id);
    onOpenChange(false);
  };

  const handleDeleteEncounter = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteEncounter(id);
      if (id === currentEncounterId) {
        newEncounter();
        setCurrentEncounterId(null);
      }
    }
  };

  const handleDuplicateEncounter = (id: string, name: string) => {
    duplicateEncounter(id, `${name} (Copy)`);
  };

  const handleNewEncounter = () => {
    newEncounter();
    setCurrentEncounterId(null);
    onOpenChange(false);
  };

  const handleExportAll = () => {
    if (encounters.length === 0) {
      alert("No encounters to export");
      return;
    }
    exportEncounters();
  };

  const handleExportSingle = (id: string) => {
    exportSingleEncounter(id);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await importEncounters(file);
      if (result.success > 0) {
        alert(
          `Successfully imported ${result.success} encounter(s)${result.failed > 0 ? `. ${result.failed} failed.` : ""}`,
        );
      } else {
        alert("No valid encounters found in the file");
      }
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to import encounters",
      );
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
    <Drawer.Root
      open={open}
      onOpenChange={onOpenChange}
      direction={drawerDirection}
    >
      <Drawer.Portal>
        <Drawer.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/50",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />
        <Drawer.Content
          className={cn(
            "group/drawer-content bg-background fixed z-50 flex flex-col",
            drawerDirection === "right" &&
              "h-full inset-y-0 right-0 w-96 border-l",
            drawerDirection === "bottom" &&
              "inset-x-0 bottom-0 max-h-[85vh] rounded-t-xl border-t",
          )}
        >
          <header className="flex shrink-0 items-center justify-between gap-2 border-b p-4">
            <div className="flex min-w-0 items-center gap-2">
              <BookOpen className="h-5 w-5 shrink-0 text-primary" />
              <Drawer.Title className="truncate text-lg font-semibold">
                Encounters
              </Drawer.Title>
            </div>
            <Drawer.Close asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                <X className="h-4 w-4" aria-hidden />
              </Button>
            </Drawer.Close>
          </header>

        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Current encounter */}
          <section className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Current encounter
              </h3>
              {currentEncounterId && (
                <Badge variant="secondary" className="text-xs shrink-0">
                  Saved
                </Badge>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={handleSaveCurrent}
                className="w-full justify-start"
                variant="outline"
                size="sm"
              >
                <Save className="h-4 w-4 shrink-0 mr-2" />
                {currentEncounterId ? "Update" : "Save"}
              </Button>
              <Button
                onClick={handleNewEncounter}
                className="w-full justify-start"
                variant="outline"
                size="sm"
              >
                <Plus className="h-4 w-4 shrink-0 mr-2" />
                New encounter
              </Button>
            </div>
          </section>

          {/* Save as new */}
          <section className="space-y-3 border-t pt-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Save as new
            </h3>
            <div className="space-y-2">
              <Input
                value={saveAsName}
                onChange={(e) => setSaveAsName(e.target.value)}
                placeholder="Name"
                className="text-sm"
              />
              <Input
                value={saveAsDescription}
                onChange={(e) => setSaveAsDescription(e.target.value)}
                placeholder="Description (optional)"
                className="text-sm"
              />
              <Button
                onClick={handleSaveAs}
                disabled={!saveAsName.trim()}
                className="w-full"
                size="sm"
              >
                <Save className="h-4 w-4 shrink-0 mr-2" />
                Save as new
              </Button>
            </div>
          </section>

          {/* Import / export */}
          <section className="space-y-3 border-t pt-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Import / export
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={handleImportClick}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Upload className="h-4 w-4 shrink-0 mr-2" />
                Import
              </Button>
              <Button
                onClick={handleExportAll}
                variant="outline"
                size="sm"
                className="w-full"
                disabled={encounters.length === 0}
              >
                <Download className="h-4 w-4 shrink-0 mr-2" />
                Export all
              </Button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
              aria-hidden
            />
          </section>

          {/* Saved list */}
          <section className="space-y-3 border-t pt-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Saved ({encounters.length})
              </h3>
              {encounters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (window.confirm("Delete all saved encounters?")) {
                      clearAllEncounters();
                      newEncounter();
                      setCurrentEncounterId(null);
                    }
                  }}
                  className="h-7 px-2 text-destructive hover:text-destructive"
                >
                  Clear all
                </Button>
              )}
            </div>

            {encounters.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No saved encounters yet
              </p>
            ) : (
              <div className="space-y-2">
                {encounters.map((encounter) => (
                    <div
                    key={encounter.id}
                    className={cn(
                      "rounded-lg border p-3",
                      encounter.id === currentEncounterId &&
                        "border-primary bg-primary/5",
                    )}
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-medium">
                          {encounter.name}
                        </h4>
                        <p className="truncate text-xs text-muted-foreground">
                          {getEncounterSummary(encounter)}
                        </p>
                      </div>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        R{encounter.currentRound}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 shrink-0" />
                        {formatDate(encounter.updatedAt)}
                        <Users className="h-3 w-3 shrink-0" />
                        {encounter.creatures.length}
                      </span>
                      <div className="flex shrink-0 items-center gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => handleLoadEncounter(encounter)}
                          title="Load"
                        >
                          <Play className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => handleExportSingle(encounter.id)}
                          title="Export"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            handleDuplicateEncounter(
                              encounter.id,
                              encounter.name,
                            )
                          }
                          title="Duplicate"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive"
                          onClick={() =>
                            handleDeleteEncounter(encounter.id, encounter.name)
                          }
                          title="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <footer className="mt-auto shrink-0 border-t p-4 pb-safe">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full"
          >
            Close
          </Button>
        </footer>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
