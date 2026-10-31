import PageHero from '../components/ui/PageHero';
import SubNav from '../components/ui/SubNav';
import SectionHeading from '../components/ui/SectionHeading';
import Photo from '../components/ui/Photo';
import Icon from '../components/ui/Icon';
import { ButtonLink, WhatsAppButton } from '../components/ui/Buttons';
import Steps from '../components/sections/Steps';
import GalleryStrip from '../components/sections/GalleryStrip';
import BookingCTA from '../components/sections/BookingCTA';
import { IMAGES } from '../config/images';
import { WOMEN_SUBNAV } from '../data/navigation';
import { enquiryMessage } from '../utils/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

const BRIDAL_INCLUDES = [
  'Pre-bridal consultation',
  'Makeup trial',
  'Skin preparation',
  'Bridal makeup & lashes',
  'Bridal hairstyling',
  'Dupatta / saree draping',
];

const PARTY_OCCASIONS = [
  'Engagement & roka',
  'Mehendi, haldi & sangeet',
  'Reception & cocktail evenings',
  'Festivals & family celebrations',
  'Birthdays, anniversaries & parties',
  'Bridesmaids & family group bookings',
];

const JOURNEY = [
  { title: 'Enquire', text: 'Message us your wedding dates, venues and functions on WhatsApp.' },
  { title: 'Consult', text: 'We discuss your outfits, jewellery, skin and the looks you love.' },
  { title: 'Trial', text: 'A trial session to refine your bridal look before the day.' },
  { title: 'Your Day', text: 'Calm, on-time preparation so you can enjoy every moment.' },
];

function TickList({ items }) {
  return (
    <ul className="tick-list tick-list--columns">
      {items.map((item) => (
        <li key={item}>
          <Icon name="sparkle" size={14} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BridalPartyMakeup() {
  usePageMeta('Bridal & Party Makeup', 'Bridal, engagement, party and festive makeup and hairstyling by OBARBA. Enquire on WhatsApp.');

  return (
    <div className="theme-women">
      <PageHero
        kicker="Bridal & Party Makeup"
        title={
          <>
            For Your Most <em>Beautiful</em> Moments
          </>
        }
        text="Bridal looks that last from the first ritual to the last dance, and party makeup for every celebration in between."
        image={IMAGES.bridalBride}
        crumbs={[{ label: 'Bridal & Party Makeup' }]}
      >
        <WhatsAppButton message={enquiryMessage('bridal makeup')}>Bridal Enquiry</WhatsAppButton>
        <ButtonLink to="/makeup-artist">Meet the Artist</ButtonLink>
      </PageHero>
      <SubNav links={WOMEN_SUBNAV} label="Women’s" />

      <section className="section" id="bridal" aria-labelledby="bridal-title">
        <div className="container split">
          <div className="split__content">
            <SectionHeading
              id="bridal-title"
              kicker="Bridal Makeup"
              title={
                <>
                  The Bride, <em>Radiant</em>
                </>
              }
              text="Your bridal look is planned with you from the first conversation — balanced for your outfit, jewellery, venue lighting and photographs, and made to last through long celebrations."
            />
            <p className="lead-label">Typically included — customised for you</p>
            <TickList items={BRIDAL_INCLUDES} />
            <p className="fine-print">Final inclusions and pricing are confirmed during your consultation.</p>
            <div className="actions">
              <WhatsAppButton message={enquiryMessage('bridal makeup packages')}>Ask About Bridal Packages</WhatsAppButton>
            </div>
          </div>
          <div className="split__media framed framed--tall">
            <Photo image={IMAGES.bridalGown} />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="The Bridal Journey"
            title={
              <>
                Four Steps to <em>Your Day</em>
              </>
            }
          />
          <Steps steps={JOURNEY} />
        </div>
      </section>

      <section className="section" id="party" aria-labelledby="party-title">
        <div className="container split split--reverse">
          <div className="split__media framed framed--tall">
            <Photo image={IMAGES.makeupOccasion} />
          </div>
          <div className="split__content">
            <SectionHeading
              id="party-title"
              kicker="Party & Occasion Makeup"
              title={
                <>
                  Ready for Every <em>Celebration</em>
                </>
              }
              text="From soft, fresh looks to full evening glamour, with hairstyling to match. Perfect for pre-wedding functions, receptions, festivals and nights out."
            />
            <TickList items={PARTY_OCCASIONS} />
            <div className="actions">
              <WhatsAppButton message={enquiryMessage('party makeup')}>Party Makeup Enquiry</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <GalleryStrip
        kicker="Bridal & Makeup Looks"
        title={
          <>
            Moments to <em>Remember</em>
          </>
        }
        categories={['bridal', 'makeup']}
        exclude={[IMAGES.bridalBride, IMAGES.bridalGown, IMAGES.makeupOccasion, IMAGES.bridalBouquet]}
        to="/gallery?category=bridal"
        linkLabel="View bridal gallery"
      />

      <BookingCTA
        kicker="Bridal & party enquiries"
        title={
          <>
            Planning Your <em>Celebration?</em>
          </>
        }
        text="Dates fill up early in wedding season. Send us your dates and functions and we’ll reply with availability."
        message={enquiryMessage('bridal / party makeup for my upcoming dates')}
        buttonLabel="Check Availability"
        image={IMAGES.bridalBouquet}
        secondary={{ to: '/makeup-artist', label: 'Makeup Artist' }}
      />
    </div>
  );
}
