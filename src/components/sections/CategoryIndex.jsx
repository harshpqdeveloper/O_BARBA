import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';

/** Compact text-only index of service categories, linking to their sections further down the page. */
export default function CategoryIndex({ categories }) {
  // Up to 5 sit in one row; longer lists split into two balanced rows (e.g. 7 → 4 + 3).
  const cols = categories.length <= 5 ? categories.length : Math.ceil(categories.length / 2);
  return (
    <ul className="category-index" style={{ '--cols': cols }}>
      {categories.map((c, i) => (
        <li key={c.id}>
          <Link to={{ hash: `#${c.id}` }} className="category-index__link">
            <span className="category-index__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="category-index__title">{c.title}</span>
            <span className="category-index__tagline">{c.tagline}</span>
            <Icon name="arrowRight" size={16} className="category-index__arrow" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
