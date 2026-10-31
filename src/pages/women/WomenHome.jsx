import PageHero from '../../components/ui/PageHero';
import SubNav from '../../components/ui/SubNav';
import SectionHeading from '../../components/ui/SectionHeading';
import Photo from '../../components/ui/Photo';
import Icon from '../../components/ui/Icon';
import { ButtonLink, WhatsAppButton } from '../../components/ui/Buttons';
import FeatureRow from '../../components/cards/FeatureRow';
import CategoryIndex from '../../components/sections/CategoryIndex';
import GalleryStrip from '../../components/sections/GalleryStrip';
import BookingCTA from '../../components/sections/BookingCTA';
import { IMAGES } from '../../config/images';
import { WOMEN_CATEGORIES } from '../../data/services';
import { WOMEN_SUBNAV } from '../../data/navigation';
import { bookingMessage } from '../../utils/whatsapp';
import { usePageMeta } from '../../hooks/usePageMeta';

const PILLARS = [
  { icon: 'heart', title: 'Personal Consultation', text: 'Your hair, skin and style are discussed first, so the result feels like you.' },
  { icon: 'sparkle', title: 'Considered Detail', text: 'Thoughtful technique and finishing touches that make the difference.' },
  { icon: 'leaf', title: 'A Calm Escape', text: 'An elegant, relaxed space to take time for yourself.' },
];

export default function WomenHome() {
  usePageMeta('Women’s Hair, Beauty & Makeup', 'Women’s haircuts, hair styling, hair treatments, beauty services, makeup artist, bridal and party makeup at OBARBA.');

  return (
    <div className="theme-women">
      <PageHero
        kicker="OBARBA for Women"
        title={
          <>
            Beauty, <em>Your Way</em>
          </>
        }
        text="Hair, beauty and makeup created around you — from an effortless everyday blow-dry to your bridal look."
        image={IMAGES.womenGlam}
        crumbs={[{ label: 'Women' }]}
      >
        <WhatsAppButton message={bookingMessage('a women’s hair or beauty service')}>Book an Appointment</WhatsAppButton>
        <ButtonLink to="/women/services">View Services</ButtonLink>
      </PageHero>
      <SubNav links={WOMEN_SUBNAV} label="Women’s" />

      <section className="section">
        <div className="container split">
          <div className="split__content">
            <SectionHeading
              kicker="The Women’s Studio"
              title={
                <>
                  Feel Confident, <em>Look Radiant</em>
                </>
              }
              text="Our women’s studio brings hair, beauty and makeup together under one roof. Whether it’s a fresh cut, a nourishing treatment, glowing skin or a look for a special day, every visit is tailored, unhurried and beautifully finished."
            />
            <ul className="pillars">
              {PILLARS.map((p) => (
                <li key={p.title}>
                  <Icon name={p.icon} size={22} className="pillars__icon" />
                  <span>
                    <span className="pillars__title">{p.title}</span>
                    <span className="pillars__text">{p.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="split__media framed">
            <Photo image={IMAGES.womenSalonBlowDry} />
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight-bottom">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Women’s Services"
            title={
              <>
                Every Detail, <em>Considered</em>
              </>
            }
            text="Explore each category below, or see the complete menu on the services page."
          />
          <CategoryIndex categories={WOMEN_CATEGORIES} />
        </div>
      </section>

      <section className="section section--alt section--flush-top">
        <div className="container feature-rows">
          {WOMEN_CATEGORIES.map((category, i) => (
            <FeatureRow
              key={category.id}
              category={category}
              index={i}
              to={category.link ?? `/women/services#${category.id}`}
              linkLabel={category.link ? 'Discover more' : 'View services'}
              context="Women"
            />
          ))}
        </div>
      </section>

      <GalleryStrip
        kicker="Women’s Gallery"
        title={
          <>
            Hair, Beauty &amp; <em>Makeup</em>
          </>
        }
        categories={['women', 'makeup', 'bridal']}
        exclude={[IMAGES.womenGlam, IMAGES.womenSalonBlowDry, ...WOMEN_CATEGORIES.map((c) => c.image)]}
        to="/women/gallery"
        linkLabel="View women’s gallery"
      />

      <BookingCTA
        title={
          <>
            Time for <em>You</em>
          </>
        }
        message={bookingMessage('a women’s hair or beauty service')}
        image={IMAGES.interiorBlackWall}
        secondary={{ to: '/women/services', label: 'Women’s Services' }}
      />
    </div>
  );
}
