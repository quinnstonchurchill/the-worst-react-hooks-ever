import { useEffect } from "react";

/**
 * This does exactly what you think
 */
export function useInfiniteLoop() {
  useEffect(() => {
    while (true) {
      console.log("Congrats, you played yourself");
    }
  }, []);
}
