import { useCallback, useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number = 500
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFn = useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => fn(...args), delay);
    },
    [fn]
  );

  return debouncedFn as T;
};
