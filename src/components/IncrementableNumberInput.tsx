import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Plus, Minus, ChevronsUpDown } from "lucide-react";
import { NumericInput } from "./NumericInput";

interface IncrementableNumberInputProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  onBlur?: () => void;
  className?: string;
  placeholder?: string;
}

export const IncrementableNumberInput: React.FC<
  IncrementableNumberInputProps
> = ({ value, onChange, onBlur, className = "", placeholder }) => {
  const [incrementValue, setIncrementValue] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-0.5">
      <NumericInput
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`h-8 w-full text-center ${className}`}
      />
      <Popover modal={false}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-6 shrink-0 px-0 text-muted-foreground hover:text-foreground"
            type="button"
            tabIndex={-1}
          >
            <ChevronsUpDown className="h-3 w-3" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-48 p-3"
          align="end"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Increment Value
              </label>
              <NumericInput
                value={incrementValue}
                onChange={(v) => {
                  if (v !== undefined && v > 0 && Number.isInteger(v)) {
                    setIncrementValue(v);
                  }
                }}
                onBlur={() => {
                  if (!incrementValue || incrementValue <= 0) {
                    setIncrementValue(1);
                  }
                }}
                className="h-8 text-center"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => {
                  onChange((value ?? 0) - incrementValue);
                  inputRef.current?.focus();
                }}
                variant="outline"
                size="sm"
                className="flex-1"
                type="button"
              >
                <Minus className="h-4 w-4 mr-1" />-{incrementValue}
              </Button>
              <Button
                onClick={() => {
                  onChange((value ?? 0) + incrementValue);
                  inputRef.current?.focus();
                }}
                variant="outline"
                size="sm"
                className="flex-1"
                type="button"
              >
                <Plus className="h-4 w-4 mr-1" />+{incrementValue}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
