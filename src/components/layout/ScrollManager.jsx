import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * New page → start at the top. Link with a #hash → scroll to that section
 * (smoothly within the same page, instantly when arriving from another page).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;

    if (!hash) {
      if (!samePage) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    // The target may render a frame later on a freshly loaded page, so retry briefly.
    let tries = 0;
    let frame = 0;
    const seek = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: samePage && !reduce ? 'smooth' : 'instant', block: 'start' });
        // Arriving from another page: web fonts can still shift the layout, so re-align once they are ready.
        if (!samePage) document.fonts?.ready.then(() => el.scrollIntoView({ behavior: 'instant', block: 'start' }));
      } else if (tries++ < 20) {
        frame = requestAnimationFrame(seek);
      }
    };
    frame = requestAnimationFrame(seek);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
