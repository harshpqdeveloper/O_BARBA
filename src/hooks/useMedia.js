import { useEffect, useState } from 'react';

/** Subscribes to a CSS media query, e.g. useMediaQuery('(prefers-reduced-motion: reduce)'). */
export function useMediaQuery(query) {
  const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches;
  const [matches, setMatches] = useState(get);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/**
 * Picks a value by viewport width from a { minWidth: value } map,
 * e.g. useBreakpointValue({ 0: 1, 600: 2, 900: 3, 1200: 4 }).
 */
export function useBreakpointValue(map) {
  const key = JSON.stringify(map);

  const pick = () => {
    const width = typeof window === 'undefined' ? 1280 : window.innerWidth;
    let value;
    Object.keys(map)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((bp) => {
        if (width >= bp) value = map[bp];
      });
    return value;
  };

  const [value, setValue] = useState(pick);

  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setValue(pick()));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [key]); // `key` is the serialised map, so a new object literal each render doesn't re-subscribe

  return value;
}

/** True while the element is (at least partly) on screen. */
export function useInView(ref, rootMargin = '0px') {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}

/** True while the browser tab is visible. */
export function usePageVisible() {
  const [visible, setVisible] = useState(() => typeof document === 'undefined' || !document.hidden);

  useEffect(() => {
    const onChange = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onChange);
    return () => document.removeEventListener('visibilitychange', onChange);
  }, []);

  return visible;
}
