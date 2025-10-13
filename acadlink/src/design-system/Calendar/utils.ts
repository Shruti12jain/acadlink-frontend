import * as React from "react";

/**
 * A hook to throttle a function to be called at most once in a given delay.
 *
 * @param fn - The callback function to throttle.
 * @param delay - Throttle delay in milliseconds.
 * @returns A throttled version of the function.
 */
export function useThrottle<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  const lastCalled = React.useRef<number>(0);

  const throttledFn = React.useCallback(
    (...args: Parameters<T>): void => {
      const now = Date.now();
      if (now - lastCalled.current >= delay) {
        lastCalled.current = now;
        fn(...args);
      }
    },
    [fn, delay]
  );

  return throttledFn;
}
