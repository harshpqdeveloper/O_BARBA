import { Link } from 'react-router-dom';
import Icon from './Icon';
import { whatsappLink } from '../../utils/whatsapp';

const cls = (...names) => names.filter(Boolean).join(' ');

/** Opens WhatsApp in a new tab with a prefilled message. */
export function WhatsAppButton({ message, children = 'Book on WhatsApp', variant = 'gold', className = '' }) {
  return (
    <a
      className={cls('btn', `btn--${variant}`, className)}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={18} />
      <span>{children}</span>
    </a>
  );
}

/** Internal page link styled as a button. */
export function ButtonLink({ to, children, variant = 'outline', className = '', arrow = true }) {
  return (
    <Link className={cls('btn', `btn--${variant}`, className)} to={to}>
      <span>{children}</span>
      {arrow && <Icon name="arrowRight" size={16} />}
    </Link>
  );
}

/** Understated text link with an arrow, used for secondary actions. */
export function TextLink({ to, children, className = '' }) {
  return (
    <Link className={cls('text-link', className)} to={to}>
      <span>{children}</span>
      <Icon name="arrowRight" size={15} />
    </Link>
  );
}
