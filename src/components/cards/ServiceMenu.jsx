import { Link } from 'react-router-dom';
import Photo from '../ui/Photo';
import Icon from '../ui/Icon';
import { SITE } from '../../config/site';
import { bookingMessage, whatsappLink } from '../../utils/whatsapp';

/** Category tabs that jump to each section of a services page. */
export function ServiceTabs({ categories }) {
  return (
    <nav className="service-tabs" aria-label="Service categories">
      <div className="container">
        <ul className="service-tabs__list">
          {categories.map((c) => (
            <li key={c.id}>
              <Link to={{ hash: `#${c.id}` }} className="service-tabs__link">
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/** One service category laid out as a refined price menu with a WhatsApp booking link per service. */
export default function ServiceMenu({ category, audience }) {
  const { id, title, tagline, description, image, items, link } = category;
  return (
    <section className="menu-category" id={id} aria-labelledby={`${id}-title`}>
      <div className="menu-category__aside">
        <div className="menu-category__media">
          <Photo image={image} />
        </div>
        <p className="kicker">{tagline}</p>
        <h2 className="menu-category__title" id={`${id}-title`}>
          {title}
        </h2>
        <p className="menu-category__text">{description}</p>
        {link && (
          <Link className="text-link" to={link}>
            <span>Learn more</span>
            <Icon name="arrowRight" size={15} />
          </Link>
        )}
      </div>

      <ul className="menu-category__list">
        {items.map((item) => (
          <li className="menu-item" key={item.name}>
            <div className="menu-item__head">
              <h3 className="menu-item__name">{item.name}</h3>
              <span className="menu-item__leader" aria-hidden="true" />
              <span className="menu-item__price">{item.price ?? SITE.priceFallback}</span>
            </div>
            <div className="menu-item__foot">
              <p className="menu-item__text">{item.description}</p>
              <a
                className="menu-item__book"
                href={whatsappLink(bookingMessage(item.name, `${audience} — ${title}`))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${item.name} on WhatsApp`}
              >
                <Icon name="whatsapp" size={15} />
                <span>Book</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
