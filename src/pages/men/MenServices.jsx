import PageHero from '../../components/ui/PageHero';
import SubNav from '../../components/ui/SubNav';
import SectionHeading from '../../components/ui/SectionHeading';
import { WhatsAppButton } from '../../components/ui/Buttons';
import ServiceMenu, { ServiceTabs } from '../../components/cards/ServiceMenu';
import BookingCTA from '../../components/sections/BookingCTA';
import { IMAGES } from '../../config/images';
import { MEN_CATEGORIES } from '../../data/services';
import { MEN_SUBNAV } from '../../data/navigation';
import { bookingMessage } from '../../utils/whatsapp';
import { usePageMeta } from '../../hooks/usePageMeta';

export default function MenServices() {
  usePageMeta('Men’s Services', 'The full OBARBA men’s menu — haircuts, modern hairstyles, beard styling, hair treatments, facials and grooming.');

  return (
    <div className="theme-men">
      <PageHero
        kicker="Men’s Services"
        title={
          <>
            The Grooming <em>Menu</em>
          </>
        }
        text="Every service includes a consultation and a finish you can maintain. Tap “Book” next to any service to request it on WhatsApp."
        image={IMAGES.menSkinFade}
        crumbs={[{ label: 'Men', to: '/men' }, { label: 'Services' }]}
      >
        <WhatsAppButton message={bookingMessage('a men’s service')}>Book on WhatsApp</WhatsAppButton>
      </PageHero>
      <SubNav links={MEN_SUBNAV} label="Men’s" />
      <ServiceTabs categories={MEN_CATEGORIES} />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Prices"
            title={
              <>
                Tailored to <em>You</em>
              </>
            }
            text="Prices depend on hair length, style and the time your service needs. Ask on WhatsApp and we’ll confirm before you visit."
          />
          <div className="menu-categories">
            {MEN_CATEGORIES.map((category) => (
              <ServiceMenu key={category.id} category={category} audience="Men" />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title={
          <>
            Not Sure Which <em>Service?</em>
          </>
        }
        text="Message us with a photo or a few words about what you’d like — we’ll recommend the right service and time."
        message="Hello OBARBA, I’m not sure which men’s service I need. Could you help me choose?"
        buttonLabel="Ask on WhatsApp"
        image={IMAGES.interiorChair}
        secondary={{ to: '/men/gallery', label: 'Men’s Gallery' }}
      />
    </div>
  );
}
