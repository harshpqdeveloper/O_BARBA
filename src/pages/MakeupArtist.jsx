import PageHero from '../components/ui/PageHero';
import SubNav from '../components/ui/SubNav';
import SectionHeading from '../components/ui/SectionHeading';
import Photo from '../components/ui/Photo';
import SampleNotice from '../components/ui/SampleNotice';
import { ButtonLink, WhatsAppButton } from '../components/ui/Buttons';
import Gallery from '../components/gallery/Gallery';
import Steps from '../components/sections/Steps';
import BookingCTA from '../components/sections/BookingCTA';
import { IMAGES } from '../config/images';
import { SITE } from '../config/site';
import { MAKEUP_SERVICES } from '../data/services';
import { WOMEN_SUBNAV } from '../data/navigation';
import { enquiryMessage } from '../utils/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

const PROCESS = [
  { title: 'Consultation', text: 'We talk through the occasion, your outfit, skin and the look you have in mind.' },
  { title: 'Trial (optional)', text: 'For weddings and big events, a trial lets us perfect the look ahead of the day.' },
  { title: 'Your Look', text: 'Skin preparation, makeup and finishing touches — created to last and photograph beautifully.' },
];

export default function MakeupArtist() {
  const artist = SITE.makeupArtist;
  usePageMeta('Makeup Artist', 'Professional bridal, party, engagement and special occasion makeup at OBARBA.');

  return (
    <div className="theme-women">
      <PageHero
        kicker="Makeup Artist"
        title={
          <>
            Artistry That Feels Like <em>You</em>
          </>
        }
        text="Bridal, party, engagement and special-occasion makeup — skin-first, long-wearing and designed around your features."
        image={IMAGES.makeupEyeliner}
        crumbs={[{ label: 'Makeup Artist' }]}
      >
        <WhatsAppButton message={enquiryMessage('makeup services')}>Enquire on WhatsApp</WhatsAppButton>
        <ButtonLink to="/bridal-party-makeup">Bridal &amp; Party</ButtonLink>
      </PageHero>
      <SubNav links={WOMEN_SUBNAV} label="Women’s" />

      <section className="section">
        <div className="container split">
          <div className="split__media framed">
            <Photo image={IMAGES.makeupBrushes} />
          </div>
          <div className="split__content">
            <SectionHeading
              kicker="Meet the Artist"
              title={artist.name}
            />
            <p className="lead-label">{artist.title}</p>
            <p className="body-text">{artist.intro}</p>
            <SampleNotice>Artist profile to be completed with the artist’s real details.</SampleNotice>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="services" aria-labelledby="makeup-services-title">
        <div className="container">
          <SectionHeading
            id="makeup-services-title"
            align="center"
            kicker="Makeup Services"
            title={
              <>
                A Look for Every <em>Moment</em>
              </>
            }
            text="Each look is personalised. Send us your date, occasion and outfit on WhatsApp and we’ll share availability and details."
          />
          <div className="makeup-grid">
            {MAKEUP_SERVICES.map((service) => (
              <article className="makeup-card" key={service.id}>
                <div className="makeup-card__media">
                  <Photo image={service.image} />
                </div>
                <div className="makeup-card__body">
                  <h3 className="makeup-card__title">{service.title}</h3>
                  <p className="makeup-card__text">{service.description}</p>
                  <WhatsAppButton variant="ghost" message={enquiryMessage(service.title.toLowerCase())}>
                    Enquire
                  </WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="How It Works"
            title={
              <>
                Simple, Personal, <em>Unhurried</em>
              </>
            }
          />
          <Steps steps={PROCESS} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="makeup-portfolio-title">
        <div className="container">
          <SectionHeading
            id="makeup-portfolio-title"
            align="center"
            kicker="Portfolio"
            title={
              <>
                Makeup &amp; <em>Bridal Looks</em>
              </>
            }
          />
          <Gallery categories={['makeup', 'bridal']} />
        </div>
      </section>

      <BookingCTA
        kicker="Makeup enquiries"
        title={
          <>
            Let’s Create Your <em>Look</em>
          </>
        }
        text="Share your date, venue and the look you have in mind — we’ll reply with availability and details."
        message={enquiryMessage('makeup for an upcoming occasion')}
        buttonLabel="Enquire on WhatsApp"
        image={IMAGES.makeupPalette}
        secondary={{ to: '/bridal-party-makeup', label: 'Bridal & Party Makeup' }}
      />
    </div>
  );
}
