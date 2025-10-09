import React, { useState, useEffect, useRef } from "react";
import {
  InitiativeTrackerProvider,
  useInitiativeTracker,
  type InitiativeRow,
  StatusCondition,
  type DeathSaveStatus,
  DeathSaveStatusEnum,
} from "./InitiativeTrackerContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Check,
  ChevronsUpDown,
  FileText,
  Edit3,
  Trash2,
  ArrowUpDown,
  GripVertical,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Plus,
  Wand2,
  Copy,
  HelpCircle,
} from "lucide-react";
import { MonsterAutocomplete } from "./MonsterAutocomplete";
import { AIAssistant } from "./AIAssistant";
import { EncounterDrawer } from "./EncounterDrawer";
import { HelpModal } from "./HelpModal";
import { aiService } from "../lib/ai-service";
import { useEncounters } from "../hooks/useEncounters";
import { useKeyPress } from "../hooks/useKeyPress";
import { useLocalStorage } from "usehooks-ts";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Extend ColumnMeta to include className for responsive styling
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    className?: string;
  }
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type Modifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Textarea } from "./ui/textarea";

// Editable cell components
const EditableTextCell = ({ getValue, row, column, placeholder }: any) => {
  const { updateInitiativeRow } = useInitiativeTracker();
  const initialValue = getValue() as string;
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    updateInitiativeRow(row.index, column.id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      type="text"
      placeholder={placeholder}
      className="h-8 w-full"
    />
  );
};

const EditableNumberCell = ({ getValue, row, column }: any) => {
  const { updateInitiativeRow } = useInitiativeTracker();
  const initialValue = getValue() as number | undefined;
  const [value, setValue] = useState(initialValue ?? "");

  const onBlur = () => {
    const numericValue = value === "" ? undefined : Number(value);
    updateInitiativeRow(row.index, column.id, numericValue);
  };

  React.useEffect(() => {
    setValue(initialValue ?? "");
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setValue("");
    } else {
      const numericValue = Number(inputValue);
      if (!isNaN(numericValue)) {
        setValue(numericValue);
      }
    }
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      type="number"
      className="h-8 min-w-10 w-full text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
    />
  );
};

const StatusConditionsCell = ({ getValue, row, column }: any) => {
  const { updateInitiativeRow } = useInitiativeTracker();
  const selectedConditions = (getValue() as StatusCondition[]) || [];
  const [open, setOpen] = useState(false);

  const allConditions = Object.values(StatusCondition);

  const toggleCondition = (condition: StatusCondition) => {
    const newConditions = selectedConditions.includes(condition)
      ? selectedConditions.filter((c) => c !== condition)
      : [...selectedConditions, condition];

    updateInitiativeRow(row.index, column.id, newConditions);
  };

  const formatConditionName = (condition: string) => {
    return condition.charAt(0).toUpperCase() + condition.slice(1);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-8 w-full justify-between text-xs border-none bg-muted rounded-none !hover:bg-muted"
        >
          {selectedConditions.length === 0
            ? "Select conditions..."
            : `${selectedConditions.length} condition${selectedConditions.length !== 1 ? "s" : ""}`}
          <ChevronsUpDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search conditions..." className="h-8" />
          <CommandList>
            <CommandEmpty>No conditions found.</CommandEmpty>
            <CommandGroup>
              {allConditions.map((condition) => (
                <CommandItem
                  key={condition}
                  onSelect={() => toggleCondition(condition)}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    checked={selectedConditions.includes(condition)}
                    onChange={() => toggleCondition(condition)}
                  />
                  <span className="flex-1">
                    {formatConditionName(condition)}
                  </span>
                  {selectedConditions.includes(condition) && (
                    <Check className="h-3 w-3" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const NotesCell = ({ getValue, row, column }: any) => {
  const { updateInitiativeRow, removeInitiativeRow } = useInitiativeTracker();
  const initialNotes = (getValue() as string) || "";
  const [notes, setNotes] = useState(initialNotes);
  const [open, setOpen] = useState(false);

  // Mobile-only HP and AC state
  const [hp, setHp] = useState(row.original.hp || "");
  const [maxHp, setMaxHp] = useState(row.original.maxHp || "");
  const [ac, setAc] = useState(row.original.ac || "");

  React.useEffect(() => {
    setNotes(initialNotes);
    setHp(row.original.hp || "");
    setMaxHp(row.original.maxHp || "");
    setAc(row.original.ac || "");
  }, [initialNotes, row.original.hp, row.original.maxHp, row.original.ac]);

  const handleSave = () => {
    updateInitiativeRow(row.index, column.id, notes);
    // Update HP and AC on mobile
    updateInitiativeRow(row.index, "hp", hp === "" ? undefined : Number(hp));
    updateInitiativeRow(
      row.index,
      "maxHp",
      maxHp === "" ? undefined : Number(maxHp),
    );
    updateInitiativeRow(row.index, "ac", ac === "" ? undefined : Number(ac));
    setOpen(false);
  };

  const handleCancel = () => {
    setNotes(initialNotes);
    setHp(row.original.hp || "");
    setMaxHp(row.original.maxHp || "");
    setAc(row.original.ac || "");
    setOpen(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      removeInitiativeRow(row.index);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          title={
            initialNotes
              ? `Notes: ${initialNotes.slice(0, 50)}${initialNotes.length > 50 ? "..." : ""}`
              : "Add notes"
          }
        >
          {initialNotes ? (
            <FileText className="h-4 w-4 text-blue-600" />
          ) : (
            <Edit3 className="h-4 w-4 text-gray-400" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-3">
          {/* Mobile-only HP and AC inputs */}
          <div className="md:hidden space-y-3 pb-3 border-b border-gray-200">
            <h4 className="font-medium text-sm text-gray-700">Combat Stats</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-xs text-gray-500">HP</label>
                <Input
                  type="number"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  placeholder="HP"
                  className="h-8 text-center"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Max HP</label>
                <Input
                  type="number"
                  value={maxHp}
                  onChange={(e) => setMaxHp(e.target.value)}
                  placeholder="Max"
                  className="h-8 text-center"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500">AC</label>
                <Input
                  type="number"
                  value={ac}
                  onChange={(e) => setAc(e.target.value)}
                  placeholder="AC"
                  className="h-8 text-center"
                />
              </div>
            </div>
          </div>

          {/* Actions Section */}
          {row.original.actions && row.original.actions.length > 0 && (
            <div className="space-y-2 pb-3 border-b border-gray-200">
              <h4 className="font-medium text-sm text-gray-700">Actions</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {row.original.actions.map(
                  (
                    action: { name: string; description: string },
                    index: number,
                  ) => (
                    <div key={index} className="p-2 bg-gray-50 rounded text-xs">
                      <div className="font-semibold text-gray-800">
                        {action.name}
                      </div>
                      <div className="text-gray-600 mt-1">
                        {action.description}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Notes</h4>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes for this character..."
              className="w-full min-h-[100px] p-2 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
          <div className="flex justify-between">
            {/* Mobile-only delete button */}
            <Button
              variant="destructive"
              size="sm"
              onClick={handleDelete}
              className="md:hidden"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>

            <div className="flex space-x-2 ml-auto">
              <Button variant="outline" size="sm" onClick={handleCancel}>
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

// Duplicate row cell component that creates a copy of the row in the table
const DuplicateRowCell = ({ row }: any) => {
  const { addInitiativeRow } = useInitiativeTracker();

  const handleDuplicateRow = () => {
    const rowData = row.original;

    // Create a duplicate of the row data
    const duplicateData = {
      name: `${rowData.name} (Copy)`,
      initiative: rowData.initiative || 0,
      hp: rowData.hp,
      maxHp: rowData.maxHp,
      ac: rowData.ac,
      speed: rowData.speed,
      notes: rowData.notes,
      actions: rowData.actions,
      statusConditions: [...(rowData.statusConditions || [])],
      concentration: rowData.concentration,
      tempHp: rowData.tempHp,
      deathSaves: rowData.deathSaves ? { ...rowData.deathSaves } : undefined,
    };

    // Add the duplicate row to the table
    addInitiativeRow(duplicateData);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDuplicateRow}
      className="h-8 w-8 p-0 hover:bg-gree-200"
      title="Duplicate this row"
    >
      <Copy className="h-4 w-4" />
    </Button>
  );
};

const DeathSavesCell = ({ getValue, row, column }: any) => {
  const { updateInitiativeRow } = useInitiativeTracker();
  const deathSaves = (getValue() as {
    1: DeathSaveStatus;
    2: DeathSaveStatus;
    3: DeathSaveStatus;
  }) || {
    1: DeathSaveStatusEnum.Neutral,
    2: DeathSaveStatusEnum.Neutral,
    3: DeathSaveStatusEnum.Neutral,
  };

  const updateDeathSave = (
    saveNumber: 1 | 2 | 3,
    newStatus: DeathSaveStatus,
  ) => {
    const newDeathSaves = {
      ...deathSaves,
      [saveNumber]: newStatus,
    };
    updateInitiativeRow(row.index, column.id, newDeathSaves);
  };

  const toggleDeathSave = (
    saveNumber: 1 | 2 | 3,
    saveType: "success" | "failure",
  ) => {
    const currentStatus = deathSaves[saveNumber];
    const newStatus =
      currentStatus === saveType ? DeathSaveStatusEnum.Neutral : saveType;
    updateDeathSave(saveNumber, newStatus);
  };

  return (
    <div className="flex space-x-2">
      {([1, 2, 3] as const).map((saveNumber) => (
        <div key={saveNumber} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-1">
            <Checkbox
              checked={deathSaves[saveNumber] === DeathSaveStatusEnum.Success}
              onCheckedChange={() => toggleDeathSave(saveNumber, "success")}
              className="h-3 w-3"
              title={`Death Save ${saveNumber} - Success`}
            />
            <span className="text-xs text-green-600">S</span>
          </div>
          <div className="flex items-center space-x-1">
            <Checkbox
              checked={deathSaves[saveNumber] === DeathSaveStatusEnum.Failure}
              onCheckedChange={() => toggleDeathSave(saveNumber, "failure")}
              className="h-3 w-3"
              title={`Death Save ${saveNumber} - Failure`}
            />
            <span className="text-xs text-red-600">F</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const DeleteRowCell = ({ row }: any) => {
  const { removeInitiativeRow } = useInitiativeTracker();

  const handleDelete = () => {
    //if (window.confirm('Are you sure you want to delete this row?')) {
    removeInitiativeRow(row.index);
    //}
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 hover:text-red-600"
      onClick={handleDelete}
      title="Delete this row"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

const ConcentrationCell = ({ getValue, row, column }: any) => {
  const { updateInitiativeRow } = useInitiativeTracker();
  const isConcentrating = (getValue() as boolean) || false;

  const handleToggle = (checked: boolean) => {
    updateInitiativeRow(row.index, column.id, checked);
  };

  return (
    <div className="flex items-center justify-center">
      <Checkbox
        checked={isConcentrating}
        onCheckedChange={handleToggle}
        className="h-4 w-4"
        title={
          isConcentrating ? "Concentrating on a spell" : "Not concentrating"
        }
      />
    </div>
  );
};

const SortableRow = ({
  row,
  children,
}: {
  row: any;
  children: React.ReactNode;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: row.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // Clone children and pass drag props to the drag handle cell
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (index === 0) {
      // First cell is the drag handle
      return (
        <TableCell key="drag-handle">
          <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="flex items-center justify-center h-8 w-8 cursor-grab hover:scale-102 transition-all duration-200 rounded active:cursor-grabbing"
            title="Drag to reorder"
          >
            <GripVertical className="h-4 w-4 " />
          </div>
        </TableCell>
      );
    }
    return child;
  });

  const { currentTurn } = useInitiativeTracker();
  const isCurrentTurn = row.index === currentTurn;

  return (
    <TableRow
      style={style}
      data-state={row.getIsSelected() && "selected"}
      className={cn(
        "transition-colors duration-200",
        isDragging && "bg-gray-50",
        isCurrentTurn &&
          "!bg-yellow-100 border-l-4 border-l-yellow-500 hover:!bg-yellow-100",
      )}
    >
      {childrenWithProps}
    </TableRow>
  );
};

const TableColumns: ColumnDef<InitiativeRow>[] = [
  {
    header: "",
    id: "dragHandle",
    size: 10,
    meta: { className: "" }, // Always visible
  },
  {
    header: "Init.",
    accessorKey: "initiative",
    cell: EditableNumberCell,
    size: 25,
    meta: { className: "" }, // Always visible (sm+)
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: (props: any) => (
      <MonsterAutocomplete
        {...props}
        placeholder="Name or search monsters..."
      />
    ),
    meta: { className: "" }, // Always visible (sm+)
  },
  {
    header: "Status Conditions",
    accessorKey: "statusConditions",
    cell: StatusConditionsCell,
    size: 115,
    meta: { className: "hidden lg:table-cell" }, // lg+
  },
  {
    header: "",
    accessorKey: "notes",
    cell: NotesCell,
    size: 25,
    meta: { className: "" }, // Always visible now
  },

  {
    header: "AC",
    accessorKey: "ac",
    cell: EditableNumberCell,
    size: 25,
    meta: { className: "hidden md:table-cell" }, // md+
  },

  {
    header: "HP",
    accessorKey: "hp",
    cell: EditableNumberCell,
    size: 25,
    meta: { className: "hidden md:table-cell" }, // md+
  },
  {
    header: "MHP",
    accessorKey: "maxHp",
    cell: EditableNumberCell,
    size: 25,
    meta: { className: "hidden md:table-cell" }, // md+
  },

  {
    header: "THP",
    accessorKey: "tempHp",
    cell: EditableNumberCell,
    size: 25,
    meta: { className: "hidden xl:table-cell" }, // xl+
  },
  {
    header: "Spd.",
    accessorKey: "speed",
    cell: EditableNumberCell,
    size: 25,
    meta: { className: "hidden lg:table-cell" }, // lg+
  },
  {
    header: "Conc.",
    accessorKey: "concentration",
    cell: ConcentrationCell,
    size: 15,
    meta: { className: "hidden xl:table-cell" }, // xl+
  },
  {
    header: "Death Saves",
    accessorKey: "deathSaves",
    cell: DeathSavesCell,
    size: 35,
    meta: { className: "hidden 2xl:table-cell" }, // 2xl+
  },

  {
    header: "",
    id: "duplicate",
    cell: DuplicateRowCell,
    size: 10,
    meta: { className: "hidden md:table-cell" }, // md+
  },
  {
    header: "",
    id: "delete",
    cell: DeleteRowCell,
    size: 10,
    meta: { className: "hidden md:table-cell" }, // md+
  },
];

// Modifier to restrict dragging to Y-axis only
const restrictToVerticalAxis: Modifier = ({ transform }) => {
  return {
    ...transform,
    x: 0, // Lock X-axis movement
  };
};

const InitiativeTracker = () => {
  const {
    initiativeTracker,
    setInitiativeTracker,
    currentRound,
    currentTurn,
    addInitiativeRow,
    removeInitiativeRow,
    nextTurn,
    previousTurn,
    reset,
  } = useInitiativeTracker();
  const { getEncounter } = useEncounters();
  const [isClient, setIsClient] = useState(false);
  const [encounterOpen, setEncounterOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [encounterName, setEncounterName] = useState("Untitled Encounter");
  const [currentEncounterId, setCurrentEncounterId] = useLocalStorage<
    string | null
  >("initiative-tracker-current-encounter-id", null);
  const [combatDescription, setCombatDescription] = useState("");
  const [encounterDescription, setEncounterDescription] = useState("");
  const [isGeneratingEncounter, setIsGeneratingEncounter] = useState(false);

  // AI-generated encounter data
  const [aiDescription, setAiDescription] = useState("");
  const [combatMechanics, setCombatMechanics] = useState<
    Array<{
      name: string;
      description: string;
      trigger?: string;
    }>
  >([]);
  const [tactics, setTactics] = useState("");

  // Table ref for keyboard navigation
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Encounter management handlers
  const handleLoadEncounter = (encounter: any) => {
    setInitiativeTracker(encounter.creatures);
    setEncounterName(encounter.name);
    setCurrentEncounterId(encounter.id); // Track the loaded encounter ID

    // Load AI-generated encounter data
    setAiDescription(encounter.aiDescription || "");
    setCombatMechanics(encounter.combatMechanics || []);
    setTactics(encounter.tactics || "");

    // Set the encounter description for display
    if (encounter.aiDescription) {
      let displayDescription = encounter.aiDescription;

      if (encounter.combatMechanics && encounter.combatMechanics.length > 0) {
        displayDescription += "\n\n🎲 Combat Mechanics:\n";
        encounter.combatMechanics.forEach((mechanic: any) => {
          displayDescription += `• ${mechanic.name}: ${mechanic.description}\n`;
          if (mechanic.trigger) {
            displayDescription += `  Trigger: ${mechanic.trigger}\n`;
          }
        });
      }

      if (encounter.tactics) {
        displayDescription += `\n⚔️ Tactics: ${encounter.tactics}`;
      }

      setEncounterDescription(displayDescription);
    } else {
      setEncounterDescription(encounter.description || "");
    }

    // Note: We'd need to add setCurrentTurn and setCurrentRound to context
    // For now, we'll reset to the beginning
  };

  const handleNewEncounter = () => {
    reset();
    setEncounterName("Untitled Encounter");
    setCurrentEncounterId(null); // Clear current encounter ID from localStorage

    // Clear AI-generated encounter data
    setAiDescription("");
    setCombatMechanics([]);
    setTactics("");
    setEncounterDescription("");
  };

  const handleSaveEncounter = (encounterId: string) => {
    // When an encounter is saved, track its ID
    setCurrentEncounterId(encounterId);
  };

  const handleGenerateEncounter = async () => {
    if (!combatDescription.trim()) {
      alert(
        "Please enter a description for the encounter you want to generate.",
      );
      return;
    }

    setIsGeneratingEncounter(true);
    try {
      const encounterResponse = await aiService.generateFullEncounter(
        combatDescription,
      );

      // Clear existing creatures and add new ones
      reset();

      // Set encounter name and description
      setEncounterName(encounterResponse.encounterName);
      setEncounterDescription(encounterResponse.description);
      setCurrentEncounterId(null); // This is a new encounter

      // Store AI-generated encounter data
      setAiDescription(encounterResponse.description);
      setCombatMechanics(encounterResponse.combatMechanics || []);
      setTactics(encounterResponse.tactics || "");

      // Add creatures to the tracker
      encounterResponse.creatures.forEach((creature) => {
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

      // Show success message with mechanics
      let message = `✅ Generated "${encounterResponse.encounterName}"!\n\n`;

      if (
        encounterResponse.combatMechanics &&
        encounterResponse.combatMechanics.length > 0
      ) {
        message += `🎲 Combat Mechanics:\n`;
        encounterResponse.combatMechanics.forEach((mechanic) => {
          message += `• ${mechanic.name}: ${mechanic.description}\n`;
          if (mechanic.trigger) {
            message += `  Trigger: ${mechanic.trigger}\n`;
          }
        });
        message += "\n";
      }

      if (encounterResponse.tactics) {
        message += `⚔️ Tactics: ${encounterResponse.tactics}`;
      }

      // Set the full encounter description including mechanics and tactics
      setEncounterDescription(message);
    } catch (error) {
      console.error("Encounter Generation Error:", error);
      alert(
        `Failed to generate encounter: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsGeneratingEncounter(false);
    }
  };

  // Auto-load the current encounter on mount or when currentEncounterId changes
  useEffect(() => {
    if (currentEncounterId && getEncounter) {
      const encounter = getEncounter(currentEncounterId);
      if (encounter) {
        handleLoadEncounter(encounter);
      } else {
        setCurrentEncounterId(null);
      }
    }
  }, [currentEncounterId, getEncounter]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require 8px movement before drag starts
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const sortByInitiative = () => {
    const sorted = [...initiativeTracker].sort((a, b) => {
      // First sort by initiative (descending - higher initiative goes first)
      if (b.initiative !== a.initiative) {
        return b.initiative - a.initiative;
      }

      // Then by initiative modifier (descending - higher modifier goes first)
      const aModifier = a.initiativeModifier || 0;
      const bModifier = b.initiativeModifier || 0;
      if (bModifier !== aModifier) {
        return bModifier - aModifier;
      }

      // Finally by name (ascending - alphabetical)
      return a.name.localeCompare(b.name);
    });

    setInitiativeTracker(sorted);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = initiativeTracker.findIndex(
        (row) => row.id === active.id,
      );
      const newIndex = initiativeTracker.findIndex(
        (row) => row.id === over?.id,
      );

      setInitiativeTracker(arrayMove(initiativeTracker, oldIndex, newIndex));
    }
  };

  const table = useReactTable<InitiativeRow>({
    data: initiativeTracker,
    columns: TableColumns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  // Navigation logic for arrow keys
  const navigateToCell = (direction: 'left' | 'right' | 'up' | 'down', event?: KeyboardEvent) => {
    if (!tableRef.current) return;

    // Prevent default behavior to stop numeric input increment/decrement
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const activeElement = document.activeElement as HTMLElement;
    if (!activeElement || !tableRef.current.contains(activeElement)) return;

    // Find the current cell
    const currentCell = activeElement.closest('td');
    if (!currentCell) return;

    const currentRow = currentCell.closest('tr');
    if (!currentRow) return;

    const allRows = Array.from(tableRef.current.querySelectorAll('tbody tr'));
    const currentRowIndex = allRows.indexOf(currentRow);
    const currentCellIndex = Array.from(currentRow.children).indexOf(currentCell);

    let targetRowIndex = currentRowIndex;
    let targetCellIndex = currentCellIndex;

    switch (direction) {
      case 'left':
        targetCellIndex = Math.max(0, currentCellIndex - 1);
        break;
      case 'right':
        targetCellIndex = Math.min(currentRow.children.length - 1, currentCellIndex + 1);
        break;
      case 'up':
        targetRowIndex = Math.max(0, currentRowIndex - 1);
        break;
      case 'down':
        targetRowIndex = Math.min(allRows.length - 1, currentRowIndex + 1);
        break;
    }

    // Get the target cell
    const targetRow = allRows[targetRowIndex];
    if (!targetRow) return;

    const targetCell = targetRow.children[targetCellIndex] as HTMLElement;
    if (!targetCell) return;

    // Find the first focusable element in the target cell
    const focusableElement = targetCell.querySelector('input, button, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
    if (focusableElement) {
      focusableElement.focus();
    } else {
      targetCell.focus();
    }
  };

  // Set up cell navigation with Ctrl+Arrow keys
  useKeyPress({
    ref: tableRef,
    key: 'ArrowLeft',
    callback: (event) => navigateToCell('left', event),
    ctrlKey: true
  });

  useKeyPress({
    ref: tableRef,
    key: 'ArrowRight',
    callback: (event) => navigateToCell('right', event),
    ctrlKey: true
  });

  useKeyPress({
    ref: tableRef,
    key: 'ArrowUp',
    callback: (event) => navigateToCell('up', event),
    ctrlKey: true
  });

  useKeyPress({
    ref: tableRef,
    key: 'ArrowDown',
    callback: (event) => navigateToCell('down', event),
    ctrlKey: true
  });

  // Set up turn navigation with Shift+Arrow Left/Right
  useKeyPress({
    ref: tableRef,
    key: 'ArrowLeft',
    callback: () => previousTurn(),
    shiftKey: true
  });

  useKeyPress({
    ref: tableRef,
    key: 'ArrowRight',
    callback: () => nextTurn(),
    shiftKey: true
  });

  return (
    <div>
      {/* Encounter Name Input */}
      <div className="mb-4">
        <Input
          value={encounterName}
          onChange={(e) => setEncounterName(e.target.value)}
          placeholder="Enter encounter name..."
          className="text-lg font-semibold border-2 border-dashed border-gray-300 focus:border-blue-500 bg-transparent"
        />
      </div>

      <div className="flex flex-col gap-4 mb-4">
        {/* Combat Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Round:</span>
              <span className="text-lg font-bold text-primary">
                {currentRound}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={previousTurn}
                disabled={currentTurn === 0 && currentRound === 1}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTurn}
                className="flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={reset}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset Combat</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHelpOpen(true)}
              className="flex items-center gap-2"
              title="Help & Instructions"
            >
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Help</span>
            </Button>
          </div>
        </div>

        {/* Row Management */}
        <div className="flex flex-wrap gap-2 items-center">
          <Button
            variant="outline"
            onClick={() => {
              addInitiativeRow({
                name: "",
                initiative: 0,
                statusConditions: [],
              });
            }}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Row
          </Button>

          <AIAssistant />

          <Button
            variant="outline"
            onClick={() => setEncounterOpen(true)}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Encounters
          </Button>

          <Button
            variant="outline"
            onClick={sortByInitiative}
            className="flex items-center gap-2"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort by Initiative
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        {isClient ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <Table ref={tableRef}>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          className={
                            header.column.columnDef.meta?.className || ""
                          }
                          style={{
                            width: header.getSize() + "px",
                            minWidth: header.getSize() + "px",
                            maxWidth: header.getSize() + "px",
                          }}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                <SortableContext
                  items={initiativeTracker.map((row) => row.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <SortableRow key={row.id} row={row}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell
                            key={cell.id}
                            className={
                              cell.column.columnDef.meta?.className || ""
                            }
                            style={{
                              width: cell.column.getSize() + "px",
                              minWidth: cell.column.getSize() + "px",
                              maxWidth: cell.column.getSize() + "px",
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                      </SortableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={TableColumns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </SortableContext>
              </TableBody>
            </Table>
          </DndContext>
        ) : (
          <Table ref={tableRef}>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className={
                          header.column.columnDef.meta?.className || ""
                        }
                        style={{
                          width: header.getSize() + "px",
                          minWidth: header.getSize() + "px",
                          maxWidth: header.getSize() + "px",
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={cell.column.columnDef.meta?.className || ""}
                        style={{
                          width: cell.column.getSize() + "px",
                          minWidth: cell.column.getSize() + "px",
                          maxWidth: cell.column.getSize() + "px",
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={TableColumns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Combat Description Section */}
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Combat Description</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Describe your encounter and let AI generate creatures, combat mechanics, and tactics. 
            Be specific about the setting, number of enemies, environmental hazards, and any special conditions.
          </p>
        </div>

        {/* Generated Encounter Description */}
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
            className="w-full min-h-[120px] p-3 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 "
            rows={5}
          />
          
          <Button
            variant="outline"
            onClick={handleGenerateEncounter}
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

      {/* Encounter Drawer */}
      <EncounterDrawer
        open={encounterOpen}
        onOpenChange={setEncounterOpen}
        currentEncounterName={encounterName}
        onEncounterNameChange={setEncounterName}
        currentEncounterId={currentEncounterId}
        creatures={initiativeTracker}
        currentTurn={currentTurn}
        currentRound={currentRound}
        onLoadEncounter={handleLoadEncounter}
        onNewEncounter={handleNewEncounter}
        onSaveEncounter={handleSaveEncounter}
        aiDescription={aiDescription}
        combatMechanics={combatMechanics}
        tactics={tactics}
      />

      {/* Help Modal */}
      <HelpModal open={helpOpen} onOpenChange={setHelpOpen} />
    </div>
  );
};

export default function InitiativeTrackerWrapper() {
  return (
    <InitiativeTrackerProvider>
      <InitiativeTracker />
    </InitiativeTrackerProvider>
  );
}
