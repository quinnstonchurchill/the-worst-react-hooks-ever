import { useEffect } from "react";

/**
 * Automatically obfuscates all console logs, warnings, and errors. Debugging is too easy anyway, right? Time to turn it into a real puzzle.
 */
export function useCryptic() {
  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      originalConsoleLog(
        ...args.map((arg) => arg.toString().split("").reverse().join(""))
      );
    };
  }, []);
}
