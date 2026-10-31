import { useEffect, useRef } from 'react';
import Icon from '../ui/Icon';
import { GALLERY_CATEGORIES } from '../../data/gallery';

const categoryLabel = (id) => GALLERY_CATEGORIES.find((c) => c.id === id)?.label ?? '';

/** Full-screen image viewer built on the native <dialog> element (focus trap and Esc for free). */
export default function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const touchX = useRef(null);
  const open = index !== null && items[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.classList.toggle('no-scroll', Boolean(open));
    return () => document.documentElement.classList.remove('no-scroll');
  }, [open]);

  const step = (delta) => onChange((index + delta + items.length) % items.length);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const current = open ? items[index] : null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Image viewer"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {current && (
        <div className="lightbox__frame">
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close viewer" autoFocus>
            <Icon name="close" size={22} />
          </button>

          <figure
            className="lightbox__figure"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={onTouchEnd}
          >
            <img key={current.image.src} className="lightbox__img" src={current.image.src} alt={current.image.alt} />
            <figcaption className="lightbox__caption">
              <span className="lightbox__category">{categoryLabel(current.category)}</span>
              <span>{current.caption}</span>
              <span className="lightbox__count">
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          {items.length > 1 && (
            <>
              <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
                <Icon name="arrowLeft" size={22} />
              </button>
              <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next image">
                <Icon name="arrowRight" size={22} />
              </button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
