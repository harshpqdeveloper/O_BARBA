import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';

/** OBARBA crown wordmark. Replace with an <img> of the real logo once it is available. */
export function Crown({ className = '' }) {
  return (
    <svg className={`crown ${className}`} viewBox="0 0 48 36" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 27 L5 10 L15 19 L24 6 L33 19 L43 10 L40 27 Z" />
        <path d="M9 31.5 H39" />
        <path d="M17 23.5 h14" opacity=".55" />
      </g>
      <g fill="currentColor">
        <circle cx="5" cy="8.6" r="2" />
        <circle cx="24" cy="4.2" r="2.2" />
        <circle cx="43" cy="8.6" r="2" />
      </g>
    </svg>
  );
}

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" aria-label={`${SITE.name} — home`} onClick={onClick}>
      <Crown className="logo__crown" />
      <span className="logo__text">
        <span className="logo__name">{SITE.name}</span>
        <span className="logo__tagline">{SITE.tagline}</span>
      </span>
    </Link>
  );
}
