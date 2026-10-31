import Icon from '../ui/Icon';

const initials = (name) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

/** Testimonial card. Sample reviews carry a visible "Sample" label. */
export default function ReviewCard({ quote, name, service, sample, featured = false }) {
  return (
    <figure className={`review-card${featured ? ' review-card--featured' : ''}`}>
      <div className="review-card__top">
        <Icon name="quote" size={featured ? 34 : 26} className="review-card__mark" />
        {sample && <span className="badge">Sample review</span>}
      </div>
      <blockquote className="review-card__quote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="review-card__author">
        <span className="review-card__avatar" aria-hidden="true">
          {initials(name)}
        </span>
        <span>
          <span className="review-card__name">{name}</span>
          <span className="review-card__service">{service}</span>
        </span>
      </figcaption>
    </figure>
  );
}
