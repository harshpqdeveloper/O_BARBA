import PageHero from '../../components/ui/PageHero';
import SubNav from '../../components/ui/SubNav';
import SectionHeading from '../../components/ui/SectionHeading';
import Gallery from '../../components/gallery/Gallery';
import BookingCTA from '../../components/sections/BookingCTA';
import { IMAGES } from '../../config/images';
import { WOMEN_SUBNAV } from '../../data/navigation';
import { bookingMessage } from '../../utils/whatsapp';
import { usePageMeta } from '../../hooks/usePageMeta';

export default function WomenGallery() {
  usePageMeta('Women’s Gallery', 'Women’s hair styling, colour, makeup and bridal looks from OBARBA.');

  return (
    <div className="theme-women">
      <PageHero
        kicker="Women’s Gallery"
        title={
          <>
            Hair, Beauty &amp; <em>Bridal</em>
          </>
        }
        text="Cuts, colour, styling, makeup and bridal looks — a little inspiration for your next visit."
        image={IMAGES.womenWaves}
        crumbs={[{ label: 'Women', to: '/women' }, { label: 'Gallery' }]}
      />
      <SubNav links={WOMEN_SUBNAV} label="Women’s" />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Lookbook"
            title={
              <>
                Inspiration for Your <em>Next Visit</em>
              </>
            }
            text="Filter by category and save the looks you love — share them with us when you book."
          />
          <Gallery categories={['women', 'makeup', 'bridal']} />
        </div>
      </section>

      <BookingCTA
        title={
          <>
            Found Your <em>Look?</em>
          </>
        }
        message={bookingMessage('a women’s hair / makeup service', 'from the Women’s Gallery')}
        image={IMAGES.interiorStations}
        secondary={{ to: '/women/services', label: 'Women’s Services' }}
      />
    </div>
  );
}
