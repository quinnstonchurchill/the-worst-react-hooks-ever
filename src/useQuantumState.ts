import { useEffect, useState } from "react";

/**
 * The state can simultaneously be true, false, and null until observed. Schrödinger's variable, if you will. It adds a touch of quantum mechanics to your application logic.
 */
export function useQuantumState(initialState: boolean | null) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setState(Math.random() < 0.5 ? !state : null);
    }, 1000);
  }, [state]);

  return [state, setState] as const;
}
