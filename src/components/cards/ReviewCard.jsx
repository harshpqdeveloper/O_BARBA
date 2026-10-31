import { useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../ui/Icon';
import Lightbox from '../gallery/Lightbox';

const initials = (name) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

/**
 * Testimonial card. Sample reviews carry a visible "Sample" label.
 * `avatar` replaces the initials with the reviewer's photo (initials return if it fails to load);
 * `photo` adds a thumbnail of the review's photo that opens full size in the image viewer.
 */
export default function ReviewCard({ quote, name, service, avatar, photo, sample }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [viewing, setViewing] = useState(null);

  return (
    <figure className="review-card">
      <div className="review-card__top">
        <Icon name="quote" size={26} className="review-card__mark" />
        {sample && <span className="badge">Sample review</span>}
      </div>
      <blockquote className="review-card__quote">
        <p>{quote}</p>
      </blockquote>
      {photo && !photoFailed && (
        <button type="button" className="review-card__photo" onClick={() => setViewing(0)} aria-label={`View photo from ${name}’s review`}>
          <img src={photo.thumb} alt={photo.alt} loading="lazy" referrerPolicy="no-referrer" onError={() => setPhotoFailed(true)} />
        </button>
      )}
      <figcaption className="review-card__author">
        <span className="review-card__avatar" aria-hidden="true">
          {avatar && !avatarFailed ? (
            <img src={avatar} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setAvatarFailed(true)} />
          ) : (
            initials(name)
          )}
        </span>
        <span>
          <span className="review-card__name">{name}</span>
          <span className="review-card__service">{service}</span>
        </span>
      </figcaption>
      {/* Rendered on <body> so the viewer stays open even if a slider hides this card's slide */}
      {photo &&
        createPortal(
          <Lightbox
            items={[{ image: { src: photo.full, alt: photo.alt }, caption: `${name} · Google review photo` }]}
            index={viewing}
            onClose={() => setViewing(null)}
            onChange={setViewing}
          />,
          document.body,
        )}
    </figure>
  );
}
