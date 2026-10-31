import PageHero from '../../components/ui/PageHero';
import SubNav from '../../components/ui/SubNav';
import SectionHeading from '../../components/ui/SectionHeading';
import Gallery from '../../components/gallery/Gallery';
import BookingCTA from '../../components/sections/BookingCTA';
import { IMAGES } from '../../config/images';
import { MEN_SUBNAV } from '../../data/navigation';
import { bookingMessage } from '../../utils/whatsapp';
import { usePageMeta } from '../../hooks/usePageMeta';

export default function MenGallery() {
  usePageMeta('Men’s Gallery', 'Men’s haircuts, fades, beard styling and the OBARBA barber lounge.');

  return (
    <div className="theme-men">
      <PageHero
        kicker="Men’s Gallery"
        title={
          <>
            The Barber’s <em>Lookbook</em>
          </>
        }
        text="Cuts, fades, beards and the space where it all happens."
        image={IMAGES.menBarberAtWork}
        crumbs={[{ label: 'Men', to: '/men' }, { label: 'Gallery' }]}
      />
      <SubNav links={MEN_SUBNAV} label="Men’s" />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Lookbook"
            title={
              <>
                Find Your Next <em>Look</em>
              </>
            }
            text="Save a favourite and share it with us on WhatsApp when you book."
          />
          <Gallery categories={['men', 'interior']} />
        </div>
      </section>

      <BookingCTA
        title={
          <>
            Seen a Look You <em>Like?</em>
          </>
        }
        message={bookingMessage('a men’s haircut / grooming service', 'from the Men’s Gallery')}
        image={IMAGES.interiorRow}
        secondary={{ to: '/men/services', label: 'Men’s Services' }}
      />
    </div>
  );
}
