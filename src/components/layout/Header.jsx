import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import { MAIN_NAV, SERVICES_MENU } from '../../data/navigation';
import { whatsappLink } from '../../utils/whatsapp';

const servicePaths = SERVICES_MENU.flatMap((group) => group.links.map((l) => l.to));

function ServicesDropdown({ item, active }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => !ref.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className={`nav__item nav__item--menu${open ? ' is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nav__link${active ? ' active' : ''}`}
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <Icon name="chevronDown" size={14} className="nav__chevron" />
      </button>
      <div className="dropdown" id="services-menu" hidden={!open}>
        {item.menu.map((group) => (
          <div className="dropdown__group" key={group.heading}>
            <p className="dropdown__heading">{group.heading}</p>
            <ul>
              {group.links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end className="dropdown__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const servicesActive = servicePaths.includes(pathname);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', menuOpen);
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {MAIN_NAV.map((item) =>
              item.menu ? (
                <ServicesDropdown key={item.label} item={item} active={servicesActive} />
              ) : (
                <li className="nav__item" key={item.to}>
                  <NavLink to={item.to} end={item.end} className="nav__link">
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <a className="btn btn--outline btn--pill site-header__book" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={18} />
          <span>Book Now</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobile-menu" inert={!menuOpen}>
        <nav className="container mobile-menu__inner" aria-label="Mobile">
          <ul className="mobile-menu__list">
            {MAIN_NAV.filter((item) => !item.menu).map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="mobile-menu__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__groups">
            {SERVICES_MENU.map((group) => (
              <div key={group.heading}>
                <p className="dropdown__heading">{group.heading}</p>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <NavLink to={link.to} end className="mobile-menu__sublink">
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a className="btn btn--gold mobile-menu__book" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} />
            <span>Book Now on WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
