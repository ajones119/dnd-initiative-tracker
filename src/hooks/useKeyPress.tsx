import { useEffect, type RefObject } from 'react';

interface UseKeyPressOptions {
  ref: RefObject<HTMLElement | null>;
  key: string;
  callback: (event: KeyboardEvent) => void;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
}

export const useKeyPress = ({ ref, key, callback, ctrlKey, shiftKey, altKey }: UseKeyPressOptions) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Check if the ref is focused or contains the focused element
      if (ref.current && ref.current.contains(document.activeElement)) {
        // Check if the key matches
        if (event.key === key) {
          // Check modifier keys
          const ctrlMatch = ctrlKey === undefined || event.ctrlKey === ctrlKey;
          const shiftMatch = shiftKey === undefined || event.shiftKey === shiftKey;
          const altMatch = altKey === undefined || event.altKey === altKey;
          
          if (ctrlMatch && shiftMatch && altMatch) {
            callback(event);
          }
        }
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [ref, key, callback, ctrlKey, shiftKey, altKey]);
};

export default useKeyPress;
