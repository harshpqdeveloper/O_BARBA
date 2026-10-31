import { NavLink } from 'react-router-dom';

/** Secondary navigation bar for the dedicated Men's and Women's sections. */
export default function SubNav({ links, label }) {
  return (
    <nav className="subnav" aria-label={label}>
      <div className="container subnav__inner">
        <span className="subnav__label">{label}</span>
        <ul className="subnav__list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className="subnav__link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
