import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Gallery from '../components/gallery/Gallery';
import BookingCTA from '../components/sections/BookingCTA';
import { IMAGES } from '../config/images';
import { usePageMeta } from '../hooks/usePageMeta';

export default function GalleryPage() {
  usePageMeta('Gallery', 'Men’s grooming, women’s hair styling, makeup, bridal looks and the OBARBA salon interior.');

  return (
    <>
      <PageHero
        kicker="Gallery"
        title={
          <>
            The OBARBA <em>Lookbook</em>
          </>
        }
        text="Men’s grooming, women’s hair, makeup, bridal looks and the spaces where it all happens."
        image={IMAGES.interiorRow}
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Browse by Category"
            title={
              <>
                Craft in <em>Every Detail</em>
              </>
            }
            text="Choose a category, then select any photo to view it larger."
          />
          <Gallery syncWithUrl />
        </div>
      </section>

      <BookingCTA
        title={
          <>
            Inspired? <em>Let’s Talk.</em>
          </>
        }
        text="Share a look you love on WhatsApp and we’ll recommend the right service and time."
        message="Hello OBARBA, I saw a look in your gallery and would like to book an appointment."
        image={IMAGES.interiorBlackWall}
      />
    </>
  );
}
