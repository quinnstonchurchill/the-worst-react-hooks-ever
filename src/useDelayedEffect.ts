import { DependencyList, EffectCallback, useEffect } from "react";

export function useDelayedEffect(
  effect: EffectCallback,
  deps?: DependencyList
) {
  useEffect(() => {
    const timeout = setTimeout(effect, Math.random() * 60000);
    return () => clearTimeout(timeout);
  }, deps);
}
