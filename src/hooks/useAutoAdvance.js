import { useEffect, useState } from 'react';

/**
 * Index that moves to the next of `total` items every `interval` ms while `enabled`.
 * The timer restarts whenever the index changes, so a manual choice gets a full interval.
 */
export function useAutoAdvance(total, { interval, enabled }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [index, total]);

  useEffect(() => {
    if (!enabled || total < 2) return undefined;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % total), interval);
    return () => window.clearTimeout(id);
  }, [enabled, index, total, interval]);

  return [Math.min(index, Math.max(total - 1, 0)), setIndex];
}
