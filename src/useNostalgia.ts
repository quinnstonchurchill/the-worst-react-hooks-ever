import { useLayoutEffect } from "react";

/**
 * For when development has gone too far and you feel like taking things back a notch
 */
export function useNostalgia() {
  useLayoutEffect(() => {
    document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
  }, []);
}
