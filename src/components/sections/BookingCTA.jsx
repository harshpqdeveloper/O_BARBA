import Photo from '../ui/Photo';
import { ButtonLink, WhatsAppButton } from '../ui/Buttons';
import { IMAGES } from '../../config/images';

/** Full-width booking band that closes most pages. */
export default function BookingCTA({
  kicker = 'Book your appointment',
  title = (
    <>
      Your chair is <em>waiting</em>
    </>
  ),
  text = 'Tell us what you have in mind and we’ll find a time that suits you. Booking is quick and personal on WhatsApp.',
  message,
  buttonLabel = 'Book on WhatsApp',
  image = IMAGES.interiorChairs,
  secondary = { to: '/contact', label: 'Visit & Contact' },
}) {
  return (
    <section className="booking-cta" aria-label="Book an appointment">
      <div className="booking-cta__bg" aria-hidden="true">
        <Photo image={image} alt="" />
      </div>
      <div className="container booking-cta__inner">
        <div className="booking-cta__content">
          <p className="kicker">{kicker}</p>
          <h2 className="booking-cta__title">{title}</h2>
          <p className="booking-cta__text">{text}</p>
        </div>
        <div className="booking-cta__actions">
          <WhatsAppButton message={message}>{buttonLabel}</WhatsAppButton>
          {secondary && <ButtonLink to={secondary.to}>{secondary.label}</ButtonLink>}
        </div>
      </div>
    </section>
  );
}
