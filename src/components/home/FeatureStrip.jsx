import Icon from '../ui/Icon';

const FEATURES = [
  { icon: 'scissors', title: 'Premium Services', text: 'For Everyone' },
  { icon: 'diamond', title: 'Expert Stylists', text: 'At Your Service' },
  { icon: 'star', title: 'Luxury Experience', text: 'Like Never Before' },
  { icon: 'calendar', title: 'Easy Booking', text: 'On WhatsApp' },
];

export default function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="Why OBARBA">
      <ul className="container feature-strip__list">
        {FEATURES.map((f) => (
          <li className="feature-strip__item" key={f.title}>
            <Icon name={f.icon} size={34} strokeWidth={1.2} className="feature-strip__icon" />
            <span>
              <span className="feature-strip__title">{f.title}</span>
              <span className="feature-strip__text">{f.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
