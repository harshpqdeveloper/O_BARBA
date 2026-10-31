import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';
import { useAutoAdvance } from '../../hooks/useAutoAdvance';
import { useBreakpointValue, useInView, usePageVisible, usePrefersReducedMotion } from '../../hooks/useMedia';

const DEFAULT_PER_VIEW = { 0: 1, 600: 2, 900: 3, 1200: 4 };

/** Splits items into pages of `size`. A short final page is topped up from the start so every card keeps the same size. */
function paginate(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    const page = items.slice(i, i + size);
    for (let j = 0; page.length < size && items.length > size; j += 1) page.push(items[j]);
    pages.push(page);
  }
  return pages;
}

/**
 * Shows a few items at a time and gently cross-fades to the next set.
 * - pauses on hover, keyboard focus, when off-screen or in a background tab
 * - no autoplay when the visitor prefers reduced motion (indicators still work)
 * - `perView` maps a minimum viewport width to items per set
 * - `layout` adds a modifier class to each set, e.g. "editorial"
 * - `arrows` always shows previous / next buttons instead of indicator dots
 */
export default function FadeSlider({
  items,
  renderItem,
  label,
  perView = DEFAULT_PER_VIEW,
  interval = 6500,
  layout = 'row',
  arrows = false,
  className = '',
}) {
  const count = Math.max(1, useBreakpointValue(perView) ?? 1);
  const pages = useMemo(() => paginate(items, count), [items, count]);
  const total = pages.length;

  const rootRef = useRef(null);
  const inView = useInView(rootRef);
  const pageVisible = usePageVisible();
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(!reducedMotion);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => setPlaying(!reducedMotion), [reducedMotion]);

  const autoplay = playing && !hovered && !focused && inView && pageVisible;
  const [active, setActive] = useAutoAdvance(total, { interval, enabled: autoplay });

  useEffect(() => setActive(0), [count, setActive]);

  // Pause only for keyboard focus; a mouse click on a dot shouldn't stop the slideshow.
  const onFocus = (e) => {
    if (e.target.matches(':focus-visible')) setFocused(true);
  };
  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
  };

  return (
    <div
      ref={rootRef}
      className={`fade-slider fade-slider--${layout} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      style={{ '--per-view': count }}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        className="fade-slider__stage"
        aria-live={autoplay ? 'off' : 'polite'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {pages.map((page, i) => {
          const isActive = i === active;
          return (
            <div
              key={`${count}-${i}`}
              className={`fade-slider__set${isActive ? ' is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={!isActive}
              inert={!isActive}
            >
              {page.map((item, j) => (
                <div className="fade-slider__item" key={j}>
                  {renderItem(item, j)}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {total > 1 && (
        <div className="fade-slider__controls">
          {total <= 6 && !arrows ? (
            <div className="slider-dots">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`slider-dots__dot${i === active ? ' is-active' : ''}`}
                  aria-label={`Show set ${i + 1} of ${total}`}
                  aria-current={i === active ? 'true' : undefined}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          ) : (
            <div className="slider-steps">
              <button
                type="button"
                className="slider-steps__btn"
                aria-label="Previous"
                onClick={() => setActive((active - 1 + total) % total)}
              >
                <Icon name="arrowLeft" size={16} />
              </button>
              <span className="slider-steps__count" aria-hidden="true">
                {String(active + 1).padStart(2, '0')} <span>/</span> {String(total).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="slider-steps__btn"
                aria-label="Next"
                onClick={() => setActive((active + 1) % total)}
              >
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          )}
          <button
            type="button"
            className="slider-toggle"
            aria-label={playing ? 'Pause automatic slideshow' : 'Play automatic slideshow'}
            onClick={() => setPlaying((p) => !p)}
          >
            <Icon name={playing ? 'pause' : 'play'} size={12} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
