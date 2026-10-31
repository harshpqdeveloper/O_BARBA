import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Photo from '../ui/Photo';
import Icon from '../ui/Icon';
import HeroVideo from './HeroVideo';
import { IMAGES } from '../../config/images';
import { useInView, usePageVisible } from '../../hooks/useMedia';

function ChoiceCard({ to, image, title, subtitle }) {
  return (
    <Link to={to} className="choice-card">
      <span className="choice-card__media">
        <Photo image={image} eager />
      </span>
      <span className="choice-card__body">
        <span className="choice-card__title">{title}</span>
        <span className="choice-card__subtitle">{subtitle}</span>
        <span className="choice-card__arrow" aria-hidden="true">
          <Icon name="arrowRight" size={16} />
        </span>
      </span>
    </Link>
  );
}

export default function HomeHero() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const pageVisible = usePageVisible();

  return (
    <section className="home-hero" ref={ref} aria-labelledby="home-hero-title">
      <HeroVideo running={inView && pageVisible}>
        <div className="container home-hero__inner">
          <p className="kicker kicker--line">Welcome to OBARBA</p>
          <h1 className="home-hero__title" id="home-hero-title">
            <span>Choose Your</span>
            <em>Experience</em>
          </h1>
          <p className="home-hero__tagline">
            Look Good <span aria-hidden="true">•</span> Feel Confident <span aria-hidden="true">•</span> Be You
          </p>

          <div className="choice-cards">
            <ChoiceCard to="/men" image={IMAGES.menPortrait} title="Men’s" subtitle="Grooming & Barbering" />
            <ChoiceCard to="/women" image={IMAGES.womenPortrait} title="Women’s" subtitle="Beauty & Makeup" />
          </div>
        </div>
      </HeroVideo>
    </section>
  );
}
