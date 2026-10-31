import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import { SITE } from '../../config/site';
import { SERVICES_MENU } from '../../data/navigation';
import { whatsappLink } from '../../utils/whatsapp';

const EXPLORE = [
  { label: 'Home', to: '/' },
  { label: 'About OBARBA', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Our Team', to: '/team' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact Us', to: '/contact' },
];

const socials = Object.entries(SITE.social).filter(([, url]) => url);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>{SITE.description}</p>
          {socials.length > 0 && (
            <ul className="site-footer__social">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <Icon name={name} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__links">
            {EXPLORE.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Services</h2>
          <ul className="site-footer__links">
            {SERVICES_MENU.flatMap((g) => g.links)
              .filter((l) => !l.to.endsWith('/gallery'))
              .map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Visit</h2>
          <ul className="site-footer__contact">
            <li>
              <Icon name="pin" size={16} />
              <span>
                {SITE.address.line1}
                <br />
                {SITE.address.line2} {SITE.address.postcode}
              </span>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>
                {SITE.openingHours.map((h) => (
                  <span className="site-footer__hours" key={h.days}>
                    {h.days}: {h.hours}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <Icon name="whatsapp" size={16} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        {SITE.showSampleNotices && <p>Photography shown is temporary sample imagery, not OBARBA client work.</p>}
      </div>
    </footer>
  );
}
