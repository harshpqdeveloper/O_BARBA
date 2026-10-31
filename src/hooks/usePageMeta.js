import { useEffect } from 'react';
import { SITE } from '../config/site';

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(title, description = SITE.description) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);
}
