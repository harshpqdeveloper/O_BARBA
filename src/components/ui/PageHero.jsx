import { Link } from 'react-router-dom';
import Photo from './Photo';

/** Hero used at the top of every inner page: copy on the left, photograph on the right. */
export default function PageHero({ kicker, title, text, image, crumbs = [], children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" aria-hidden="true">
        <Photo image={image} eager alt="" />
      </div>
      <div className="container page-hero__inner">
        <div className="page-hero__content">
          {crumbs.length > 0 && (
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {crumbs.map((crumb, i) => (
                  <li key={crumb.label}>
                    {crumb.to && i < crumbs.length - 1 ? (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {kicker && <p className="kicker">{kicker}</p>}
          <h1 className="page-hero__title">{title}</h1>
          {text && <p className="page-hero__text">{text}</p>}
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
      </div>
    </section>
  );
}
