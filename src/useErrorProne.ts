import { useEffect } from "react";

/**
 * Intentionally throws random errors at unpredictable times.
 * It's like a box of chocolates for debugging – you never know what you're gonna get.
 */
export function useErrorProne() {
  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error("Oops!");
    }
  }, []);
}
