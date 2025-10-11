import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Plus, Minus } from "lucide-react";

interface IncrementableNumberInputProps {
  value: number | "";
  onChange: (value: number | "") => void;
  onBlur: () => void;
  className?: string;
  placeholder?: string;
}

export const IncrementableNumberInput: React.FC<IncrementableNumberInputProps> = ({
  value,
  onChange,
  onBlur,
  className = "",
  placeholder,
}) => {
  const [incrementValue, setIncrementValue] = useState<number>(1);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrement = () => {
    const currentValue = typeof value === "number" ? value : 0;
    onChange(currentValue + incrementValue);
  };

  const handleDecrement = () => {
    const currentValue = typeof value === "number" ? value : 0;
    onChange(currentValue - incrementValue);
  };

  const handleDirectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      onChange("");
    } else {
      const numericValue = Number(inputValue);
      if (!isNaN(numericValue)) {
        onChange(numericValue);
      }
    }
  };

  const handleFocus = () => {
    setPopoverOpen(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Only close if focus is leaving the entire component
    const relatedTarget = e.relatedTarget as HTMLElement;
    const popoverElement = document.querySelector('[role="dialog"]');
    
    if (!popoverElement?.contains(relatedTarget)) {
      setPopoverOpen(false);
      onBlur();
    }
  };

  const handleOpenChange = (open: boolean) => {
    // Only allow programmatic closing, not click-outside closing when input is focused
    if (!open && document.activeElement === inputRef.current) {
      return;
    }
    setPopoverOpen(open);
  };

  return (
    <Popover open={popoverOpen} onOpenChange={handleOpenChange} modal={false}>
      <PopoverTrigger asChild>
        <Input
          ref={inputRef}
          value={value}
          onChange={handleDirectChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="number"
          placeholder={placeholder}
          className={`h-8 w-full text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] ${className}`}
        />
      </PopoverTrigger>
      <PopoverContent 
        className="w-48 p-3" 
        align="end"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => {
          // Don't close when clicking on the input itself
          if (e.target === inputRef.current) {
            e.preventDefault();
          }
        }}
      >
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">
              Increment Value
            </label>
            <Input
              type="number"
              value={incrementValue}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (!isNaN(val) && val > 0) {
                  setIncrementValue(val);
                }
              }}
              className="h-8 text-center"
              min="1"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={() => {
                handleDecrement();
                setPopoverOpen(false);
                inputRef.current?.focus();
              }}
              variant="outline"
              size="sm"
              className="flex-1"
              type="button"
            >
              <Minus className="h-4 w-4 mr-1" />
              -{incrementValue}
            </Button>
            <Button
              onClick={() => {
                handleIncrement();
                setPopoverOpen(false);
                inputRef.current?.focus();
              }}
              variant="outline"
              size="sm"
              className="flex-1"
              type="button"
            >
              <Plus className="h-4 w-4 mr-1" />
              +{incrementValue}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

