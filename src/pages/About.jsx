import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Photo from '../components/ui/Photo';
import Icon from '../components/ui/Icon';
import { WhatsAppButton } from '../components/ui/Buttons';
import BookingCTA from '../components/sections/BookingCTA';
import { IMAGES } from '../config/images';
import { usePageMeta } from '../hooks/usePageMeta';

const VALUES = [
  { icon: 'scissors', title: 'Craft', text: 'Skilled technique and careful finishing in every cut, colour and look.' },
  { icon: 'heart', title: 'Care', text: 'Honest advice and a personal consultation before every service.' },
  { icon: 'leaf', title: 'Comfort', text: 'A calm, elegant space where you can slow down and be looked after.' },
  { icon: 'star', title: 'Confidence', text: 'Leave looking good, feeling confident and completely yourself.' },
];

const EXPERIENCES = [
  { to: '/men', image: IMAGES.menBarberAtWork, kicker: 'For Him', title: 'Men’s Grooming & Barbering' },
  { to: '/women', image: IMAGES.womenSalonBlowDry, kicker: 'For Her', title: 'Women’s Hair, Beauty & Makeup' },
];

const SPACE = [IMAGES.interiorWarm, IMAGES.interiorChair, IMAGES.interiorStations];

export default function About() {
  usePageMeta('About OBARBA', 'OBARBA is a premium salon, barber and makeup studio for men and women.');

  return (
    <>
      <PageHero
        kicker="About OBARBA"
        title={
          <>
            More Than a Salon, <em>a Lifestyle</em>
          </>
        }
        text="A premium destination for men’s grooming, women’s hair and beauty, and professional makeup."
        image={IMAGES.interiorBlackWall}
        crumbs={[{ label: 'About' }]}
      />

      <section className="section">
        <div className="container split">
          <div className="split__content">
            <SectionHeading
              kicker="Our Story"
              title={
                <>
                  Look Good. Feel Confident. <em>Be You.</em>
                </>
              }
            />
            <div className="body-text">
              <p>
                OBARBA was created around a simple belief: great grooming and beauty should feel personal. Whether
                you’re here for a sharp fade, a nourishing treatment, a fresh blow-dry or your bridal look, you deserve
                time, attention and a result that suits you.
              </p>
              <p>
                That’s why every visit begins with a conversation. We listen, recommend honestly and then focus on the
                craft — careful technique, quality finishing and an atmosphere that lets you relax.
              </p>
              <p>
                Two dedicated experiences — one for him, one for her — under one premium roof, with a shared standard of
                care.
              </p>
            </div>
          </div>
          <div className="split__media framed framed--tall">
            <Photo image={IMAGES.interiorModern} />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="What We Stand For"
            title={
              <>
                Our <em>Values</em>
              </>
            }
          />
          <ul className="values">
            {VALUES.map((v) => (
              <li className="values__item" key={v.title}>
                <Icon name={v.icon} size={30} strokeWidth={1.2} className="values__icon" />
                <h3 className="values__title">{v.title}</h3>
                <p className="values__text">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Two Experiences"
            title={
              <>
                One Standard of <em>Care</em>
              </>
            }
          />
          <div className="experience-cards">
            {EXPERIENCES.map((e) => (
              <Link to={e.to} className="experience-card" key={e.to}>
                <Photo image={e.image} />
                <span className="experience-card__body">
                  <span className="kicker">{e.kicker}</span>
                  <span className="experience-card__title">{e.title}</span>
                  <span className="experience-card__more">
                    Explore <Icon name="arrowRight" size={15} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading
              kicker="The Space"
              title={
                <>
                  Designed to Help You <em>Unwind</em>
                </>
              }
            />
            <WhatsAppButton variant="ghost" message="Hello OBARBA, I’d like to visit the salon. Could you share your location and timings?">
              Plan a Visit
            </WhatsAppButton>
          </div>
          <div className="space-grid">
            {SPACE.map((image) => (
              <div className="space-grid__item" key={image.src}>
                <Photo image={image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA image={IMAGES.interiorRow} />
    </>
  );
}
