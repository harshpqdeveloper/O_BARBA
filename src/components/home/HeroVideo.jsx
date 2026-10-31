import { useEffect, useRef, useState } from 'react';
import { HERO_SCENES, HERO_TIMING } from '../../config/videos';
import { useAutoAdvance } from '../../hooks/useAutoAdvance';
import { useMediaQuery, usePrefersReducedMotion } from '../../hooks/useMedia';

const PORTRAIT_QUERY = '(max-width: 760px), (orientation: portrait) and (max-width: 1100px)';
const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData === true;

/** One background scene: a muted looping video (or a still poster when motion is off). */
function HeroScene({ media, isActive, isLeaving, running, motion, first }) {
  const videoRef = useRef(null);
  const wasActive = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Each time a scene fades in it starts from its first frame (which matches the poster).
    if (isActive && !wasActive.current) video.currentTime = 0;
    wasActive.current = isActive;
    // Keep playing through the fade-out, then rest while hidden.
    if ((isActive || isLeaving) && running) video.play().catch(() => {});
    else video.pause();
  }, [isActive, isLeaving, running]);

  const muteRef = (el) => {
    videoRef.current = el;
    if (el) {
      // Guarantees the muted attribute for mobile autoplay policies.
      el.muted = true;
      el.setAttribute('muted', '');
    }
  };

  const state = isActive ? ' is-active' : isLeaving ? ' is-leaving' : '';
  return (
    <div className={`hero-scene${state}`}>
      <div className="hero-scene__drift">
        {motion ? (
          <video
            ref={muteRef}
            className="hero-scene__media"
            src={media.src}
            poster={media.poster}
            style={{ objectPosition: media.position }}
            autoPlay={first}
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
          />
        ) : (
          <img className="hero-scene__media" src={media.poster} alt="" style={{ objectPosition: media.position }} />
        )}
      </div>
    </div>
  );
}

/**
 * Cinematic hero background: men's scene → slow cross-fade → women's scene → back, continuously.
 * `running` should be false while the hero is off-screen or the tab is hidden.
 * The hero content is passed as children so the scene indicators follow it in tab order.
 */
export default function HeroVideo({ running, children }) {
  const portrait = useMediaQuery(PORTRAIT_QUERY);
  const reducedMotion = usePrefersReducedMotion();
  const motion = !reducedMotion && !saveData;

  const [active, setActive] = useAutoAdvance(HERO_SCENES.length, {
    interval: HERO_TIMING.interval,
    enabled: running && motion,
  });

  // The outgoing scene keeps playing (and drifting) underneath until the cross-fade completes.
  const [leaving, setLeaving] = useState(null);
  const previous = useRef(active);
  useEffect(() => {
    if (previous.current === active) return undefined;
    setLeaving(previous.current);
    previous.current = active;
    const t = window.setTimeout(() => setLeaving(null), HERO_TIMING.fade + 200);
    return () => window.clearTimeout(t);
  }, [active]);

  return (
    <>
      <div className="home-hero__media" aria-hidden="true" style={{ '--scene-fade': `${HERO_TIMING.fade}ms` }}>
        {HERO_SCENES.map((scene, i) => (
          <HeroScene
            key={scene.id}
            media={portrait ? scene.mobile : scene.desktop}
            isActive={i === active}
            isLeaving={i === leaving}
            running={running}
            motion={motion}
            first={i === 0}
          />
        ))}
      </div>

      {children}

      <div className="slider-dots home-hero__dots">
        {HERO_SCENES.map((scene, i) => (
          <button
            key={scene.id}
            type="button"
            className={`slider-dots__dot${i === active ? ' is-active' : ''}`}
            aria-label={`Show ${scene.label} scene`}
            aria-current={i === active ? 'true' : undefined}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
}
