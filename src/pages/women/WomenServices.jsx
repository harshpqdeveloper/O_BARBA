import PageHero from '../../components/ui/PageHero';
import SubNav from '../../components/ui/SubNav';
import SectionHeading from '../../components/ui/SectionHeading';
import { WhatsAppButton } from '../../components/ui/Buttons';
import ServiceMenu, { ServiceTabs } from '../../components/cards/ServiceMenu';
import BookingCTA from '../../components/sections/BookingCTA';
import { IMAGES } from '../../config/images';
import { WOMEN_CATEGORIES } from '../../data/services';
import { WOMEN_SUBNAV } from '../../data/navigation';
import { bookingMessage } from '../../utils/whatsapp';
import { usePageMeta } from '../../hooks/usePageMeta';

export default function WomenServices() {
  usePageMeta('Women’s Services', 'The full OBARBA women’s menu — haircuts, hair styling, treatments, beauty services, makeup, bridal and party makeup.');

  return (
    <div className="theme-women">
      <PageHero
        kicker="Women’s Services"
        title={
          <>
            The Beauty <em>Menu</em>
          </>
        }
        text="Hair, beauty and makeup services, each tailored after a personal consultation. Tap “Book” next to any service to request it on WhatsApp."
        image={IMAGES.womenBlowDry}
        crumbs={[{ label: 'Women', to: '/women' }, { label: 'Services' }]}
      >
        <WhatsAppButton message={bookingMessage('a women’s service')}>Book on WhatsApp</WhatsAppButton>
      </PageHero>
      <SubNav links={WOMEN_SUBNAV} label="Women’s" />
      <ServiceTabs categories={WOMEN_CATEGORIES} />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Prices"
            title={
              <>
                Personal, <em>Never Generic</em>
              </>
            }
            text="Prices vary with hair length, products and the time your look needs. Message us and we’ll confirm everything before your appointment."
          />
          <div className="menu-categories">
            {WOMEN_CATEGORIES.map((category) => (
              <ServiceMenu key={category.id} category={category} audience="Women" />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title={
          <>
            Planning Something <em>Special?</em>
          </>
        }
        text="Tell us about your occasion and we’ll suggest the right combination of hair, beauty and makeup services."
        message="Hello OBARBA, I’m planning for an occasion and would like help choosing hair, beauty and makeup services."
        buttonLabel="Ask on WhatsApp"
        image={IMAGES.interiorModern}
        secondary={{ to: '/women/gallery', label: 'Women’s Gallery' }}
      />
    </div>
  );
}
