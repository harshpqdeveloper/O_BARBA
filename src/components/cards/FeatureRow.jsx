import Photo from '../ui/Photo';
import { ButtonLink, WhatsAppButton } from '../ui/Buttons';
import { bookingMessage } from '../../utils/whatsapp';

/**
 * Large image + text row for a service category. Rows alternate sides automatically.
 * `context` is added to the WhatsApp message, e.g. "Men" → "Haircuts (Men)".
 */
export default function FeatureRow({ category, index, to, linkLabel = 'View services', context }) {
  const { id, title, tagline, description, image, highlights = [] } = category;
  return (
    <article className="feature-row" id={id}>
      <div className="feature-row__media">
        <Photo image={image} />
      </div>
      <div className="feature-row__content">
        <span className="feature-row__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="kicker">{tagline}</p>
        <h3 className="feature-row__title">{title}</h3>
        <p className="feature-row__text">{description}</p>
        {highlights.length > 0 && (
          <ul className="feature-row__highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <div className="feature-row__actions">
          {to && <ButtonLink to={to}>{linkLabel}</ButtonLink>}
          <WhatsAppButton variant="ghost" message={bookingMessage(title, context)}>
            Book
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
