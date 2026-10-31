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
import { MEN_CATEGORIES } from '../../data/services';
import { MEN_SUBNAV } from '../../data/navigation';
import { bookingMessage } from '../../utils/whatsapp';
import { usePageMeta } from '../../hooks/usePageMeta';

const PILLARS = [
  { icon: 'user', title: 'Consultation First', text: 'We talk through your hair, lifestyle and the look you want before anything is cut.' },
  { icon: 'scissors', title: 'Precision Craft', text: 'Clean lines, careful blending and details finished properly — every time.' },
  { icon: 'leaf', title: 'Time to Unwind', text: 'A calm, unhurried chair — the part of your week that’s just for you.' },
];

export default function MenHome() {
  usePageMeta('Men’s Grooming & Barbering', 'Men’s haircuts, modern hairstyles, beard styling, hair treatments and facial grooming at OBARBA.');

  return (
    <div className="theme-men">
      <PageHero
        kicker="OBARBA for Men"
        title={
          <>
            Grooming, <em>Perfected</em>
          </>
        }
        text="Precision haircuts, modern styles, beard craft and grooming rituals — delivered in a calm, premium barber lounge."
        image={IMAGES.menHotTowel}
        crumbs={[{ label: 'Men' }]}
      >
        <WhatsAppButton message={bookingMessage('a men’s grooming service')}>Book Your Chair</WhatsAppButton>
        <ButtonLink to="/men/services">View Services</ButtonLink>
      </PageHero>
      <SubNav links={MEN_SUBNAV} label="Men’s" />

      <section className="section">
        <div className="container split">
          <div className="split__content">
            <SectionHeading
              kicker="About Men’s Grooming"
              title={
                <>
                  Sharp Work. <em>No Shortcuts.</em>
                </>
              }
              text="From a clean everyday cut to a complete reset, every OBARBA service starts with your style and ends with the details done right. Expect honest advice, careful technique and a finish you can maintain at home."
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
            <Photo image={IMAGES.menTools} />
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight-bottom">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Men’s Service Categories"
            title={
              <>
                Five Ways to Look <em>Your Best</em>
              </>
            }
            text="Choose a category to learn more, or see the full menu on the services page."
          />
          <CategoryIndex categories={MEN_CATEGORIES} />
        </div>
      </section>

      <section className="section section--alt section--flush-top">
        <div className="container feature-rows">
          {MEN_CATEGORIES.map((category, i) => (
            <FeatureRow key={category.id} category={category} index={i} to={`/men/services#${category.id}`} context="Men" />
          ))}
        </div>
      </section>

      <GalleryStrip
        kicker="Men’s Gallery"
        title={
          <>
            Cuts &amp; <em>Character</em>
          </>
        }
        categories={['men']}
        exclude={[IMAGES.menHotTowel, ...MEN_CATEGORIES.map((c) => c.image)]}
        to="/men/gallery"
        linkLabel="View men’s gallery"
      />

      <BookingCTA
        title={
          <>
            Ready for a <em>Sharper</em> You?
          </>
        }
        message={bookingMessage('a men’s grooming service')}
        image={IMAGES.interiorWarm}
        secondary={{ to: '/men/services', label: 'Men’s Services' }}
      />
    </div>
  );
}
