import React, { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

/**
 * NumericInput — canonical controlled numeric input for this app.
 *
 * Design decisions:
 *
 * 1. type="text" + inputMode="decimal"
 *    Browser type="number" inputs reject intermediate states ("1.", "1e-") before
 *    the user finishes typing, making controlled React inputs behave incorrectly.
 *    type="text" gives us full string control; inputMode="decimal" gives mobile
 *    the right keyboard.
 *
 * 2. Separate display state from committed value
 *    The parent owns a `number | undefined` (the committed value).
 *    The component owns a `displayValue: string` (what the user is currently typing).
 *    These are intentionally decoupled while focused so intermediate states like
 *    "5.", "1e", "-" don't get cleared by React re-renders.
 *
 * 3. One-way sync: value → displayValue, only when NOT focused
 *    While the user is typing, external value changes don't clobber the display.
 *    When the input is blurred, the display re-syncs from the committed value.
 *
 * 4. Two parse modes
 *    parseComplete — strict, used during live typing. Rejects trailing dots ("5."),
 *    incomplete scientific ("1e"), bare sign ("-"). Only fires onChange when the
 *    user has typed something unambiguously numeric.
 *
 *    parsePermissive — used on blur/Enter. Accepts "5." as 5, ".5" as 0.5.
 *    Anything Number() can understand that contains at least one digit.
 *    Truly unparseable strings ("1e", "-", "abc") get reverted to the last
 *    committed value.
 *
 * 5. Empty is valid
 *    Backspacing all the way to "" fires onChange(undefined). Blurring on an
 *    empty input does NOT convert to 0 — it leaves it empty.
 *
 * 6. Arrow keys step by `step` (default 1). Shift+Arrow steps by 10×.
 *    Enter normalizes and commits the current display.
 *    Home/End jump to min/max when those props are provided.
 *
 * 7. onBeforeInput (not onChange) for character filtering
 *    Chakra/Zag's technique: block non-numeric characters in onBeforeInput with
 *    event.preventDefault() before they ever reach the DOM. This is cleaner than
 *    correcting the value after onChange fires, and avoids any character flash on
 *    slow browsers or IMEs.
 *
 * 8. role="spinbutton" + ARIA attributes for accessibility.
 *
 * 9. Cursor position preservation on blur normalization
 *    When we normalize "5." → "5" or "1e5" → "100000" on blur, we save the cursor
 *    position first and restore it afterward so the cursor doesn't snap to the end.
 */

// All characters that can legally appear in a JS number literal (including scientific)
const NUMERIC_CHARS_RE = /^[-+\d.eE]*$/;

// "Complete" numbers: no trailing dot, no incomplete scientific exponent.
// Accepts: integers, decimals with both sides, leading-dot decimals, scientific.
// Rejects: "5.", "1e", "1e-", "-", "+", "."
const COMPLETE_NUMBER_RE = /^[+-]?(\d+\.\d+|\d+|\.\d+)([eE][+-]?\d+)?$/;

/**
 * Parse a string as a number, only if it looks syntactically complete.
 * Used during live onChange — we only fire parent onChange when the user
 * has typed something unambiguous.
 */
function parseComplete(s: string): number | null {
  if (!COMPLETE_NUMBER_RE.test(s)) return null;
  const n = Number(s);
  return !isNaN(n) && isFinite(n) ? n : null;
}

/**
 * Parse a string permissively — accepts "5." as 5, ".5" as 0.5.
 * Used on blur/Enter to commit whatever the user typed.
 * Returns null for truly unparseable strings ("1e", "-", "abc").
 */
function parsePermissive(s: string): number | null {
  if (s === "" || !/\d/.test(s)) return null;
  const n = Number(s);
  return !isNaN(n) && isFinite(n) ? n : null;
}

/**
 * Cursor preservation — Chakra's technique adapted for our simpler (non-locale)
 * case. Records selection before a programmatic value change, then restores it
 * after by computing how much the string length delta shifted each endpoint.
 *
 * Example: "100." (cursor at 4) normalizes to "100" (cursor should be at 3).
 * Delta = 3 - 4 = -1, so end = 4 + (-1) = 3. ✓
 */
function recordCursor(el: HTMLInputElement) {
  return {
    start: el.selectionStart ?? 0,
    end: el.selectionEnd ?? 0,
    oldLength: el.value.length,
  };
}

function restoreCursor(
  el: HTMLInputElement,
  record: { start: number; end: number; oldLength: number },
) {
  const delta = el.value.length - record.oldLength;
  const start = Math.max(0, record.start + delta);
  const end = Math.max(0, record.end + delta);
  el.setSelectionRange(start, end);
}

export interface NumericInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "type"
  > {
  /** The committed numeric value. undefined = empty field. */
  value: number | undefined;
  /**
   * Called when the value commits:
   * - During typing: fires for every complete valid number, and for "" → undefined.
   * - On blur/Enter: fires after normalizing the display (e.g. "5." → 5).
   * - NOT called for incomplete intermediate states ("1e", "-", "5.").
   */
  onChange: (value: number | undefined) => void;
  /** Amount to increment/decrement on ArrowUp/ArrowDown. Default: 1. Shift multiplies by 10. */
  step?: number;
  /** Minimum value. Home key jumps here. Also surfaced via aria-valuemin. */
  min?: number;
  /** Maximum value. End key jumps here. Also surfaced via aria-valuemax. */
  max?: number;
}

export const NumericInput = React.forwardRef<
  HTMLInputElement,
  NumericInputProps
>(
  (
    {
      value,
      onChange,
      step = 1,
      min,
      max,
      onBlur,
      onKeyDown,
      className,
      ...rest
    },
    ref,
  ) => {
    const [displayValue, setDisplayValue] = useState<string>(
      value !== undefined ? String(value) : "",
    );
    const isFocused = useRef(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Merge the forwarded ref with our internal one
    const setRef = useCallback(
      (el: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current =
          el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      },
      [ref],
    );

    // Sync external value changes → display, but ONLY when not focused.
    // While focused, the user owns the display string.
    useEffect(() => {
      if (!isFocused.current) {
        setDisplayValue(value !== undefined ? String(value) : "");
      }
    }, [value]);

    // onBeforeInput: block non-numeric characters before they ever reach the DOM.
    // This is Chakra/Zag's technique — cleaner than correcting after onChange
    // because it prevents any character flash on slow browsers or IMEs.
    const handleBeforeInput = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        const inputEvent = e as unknown as InputEvent;
        const data = inputEvent.data;
        // data is null for deletions/composition events — always allow those
        if (data !== null && data !== undefined && !NUMERIC_CHARS_RE.test(data)) {
          e.preventDefault();
        }
      },
      [],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        // onBeforeInput handles per-character blocking. This is a safety net for
        // paste events and autofill that bypass onBeforeInput.
        if (raw !== "" && !NUMERIC_CHARS_RE.test(raw)) return;

        setDisplayValue(raw);

        if (raw === "") {
          onChange(undefined);
        } else {
          // Only fire onChange for unambiguously complete numbers.
          // Partial states ("1e", "5.", "-") are held in displayValue silently.
          const parsed = parseComplete(raw);
          if (parsed !== null) onChange(parsed);
        }
      },
      [onChange],
    );

    const handleFocus = useCallback(() => {
      isFocused.current = true;
    }, []);

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        isFocused.current = false;

        if (displayValue === "") {
          // Empty: leave it empty. onChange(undefined) was already fired in handleChange
          // when the user backspaced to "". No-op here.
        } else {
          const parsed = parsePermissive(displayValue);
          if (parsed !== null) {
            const normalized = String(parsed);
            if (normalized !== displayValue) {
              // Save cursor position before normalizing the display string,
              // then restore it proportionally after (Chakra's cursor technique).
              const el = inputRef.current;
              const cursor = el ? recordCursor(el) : null;
              setDisplayValue(normalized);
              // restoreCursor runs after React flushes the new value to the DOM
              if (el && cursor) {
                requestAnimationFrame(() => restoreCursor(el, cursor));
              }
            }
            if (parsed !== value) onChange(parsed);
          } else {
            // Truly invalid partial ("1e", "-", "++") → revert to last committed value
            setDisplayValue(value !== undefined ? String(value) : "");
          }
        }

        onBlur?.(e);
      },
      [displayValue, value, onChange, onBlur],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          // Shift+Arrow = 10× step (standard OS behavior, matches Chakra/Zag)
          const activeStep = e.shiftKey ? step * 10 : step;
          const base = parsePermissive(displayValue) ?? value ?? 0;
          const raw = e.key === "ArrowUp" ? base + activeStep : base - activeStep;
          // Clamp to min/max if provided
          const next =
            min !== undefined && max !== undefined
              ? Math.min(max, Math.max(min, raw))
              : min !== undefined
                ? Math.max(min, raw)
                : max !== undefined
                  ? Math.min(max, raw)
                  : raw;
          setDisplayValue(String(next));
          onChange(next);
        } else if (e.key === "Home" && min !== undefined) {
          // Home → jump to min
          e.preventDefault();
          setDisplayValue(String(min));
          onChange(min);
        } else if (e.key === "End" && max !== undefined) {
          // End → jump to max
          e.preventDefault();
          setDisplayValue(String(max));
          onChange(max);
        } else if (e.key === "Enter") {
          if (displayValue === "") {
            onChange(undefined);
          } else {
            const parsed = parsePermissive(displayValue);
            if (parsed !== null) {
              setDisplayValue(String(parsed));
              if (parsed !== value) onChange(parsed);
            } else {
              setDisplayValue(value !== undefined ? String(value) : "");
            }
          }
        }

        onKeyDown?.(e);
      },
      [displayValue, value, step, min, max, onChange, onKeyDown],
    );

    return (
      <Input
        ref={setRef}
        role="spinbutton"
        type="text"
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        aria-valuenow={value !== undefined ? value : undefined}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={value !== undefined ? String(value) : undefined}
        value={displayValue}
        onBeforeInput={handleBeforeInput}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(className)}
        {...rest}
      />
    );
  },
);

NumericInput.displayName = "NumericInput";
