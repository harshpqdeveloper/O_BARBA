import { Link } from 'react-router-dom';
import Photo from '../ui/Photo';
import Icon from '../ui/Icon';

/** Portrait image card used in service sliders. */
export default function ServiceCard({ title, group, image, to }) {
  return (
    <Link to={to} className="service-card">
      <Photo image={image} className="service-card__img" />
      <span className="service-card__body">
        {group && <span className="service-card__group">{group}</span>}
        <span className="service-card__title">{title}</span>
        <span className="service-card__more">
          Explore <Icon name="arrowRight" size={14} />
        </span>
      </span>
    </Link>
  );
}
