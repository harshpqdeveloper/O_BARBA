import { Crown } from '../components/ui/Logo';
import { ButtonLink } from '../components/ui/Buttons';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <Crown className="not-found__crown" />
        <p className="kicker">Error 404</p>
        <h1 className="not-found__title">
          This Page Has <em>Moved On</em>
        </h1>
        <p className="not-found__text">The page you’re looking for doesn’t exist. Let’s get you back to something beautiful.</p>
        <div className="actions actions--center">
          <ButtonLink to="/" variant="gold">
            Back to Home
          </ButtonLink>
          <ButtonLink to="/contact">Contact Us</ButtonLink>
        </div>
      </div>
    </section>
  );
}
