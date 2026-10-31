import { Link } from 'react-router-dom';
import HomeHero from '../components/home/HomeHero';
import FeatureStrip from '../components/home/FeatureStrip';
import SectionHeading from '../components/ui/SectionHeading';
import FadeSlider from '../components/ui/FadeSlider';
import Photo from '../components/ui/Photo';
import Icon from '../components/ui/Icon';
import SampleNotice from '../components/ui/SampleNotice';
import { ButtonLink, TextLink, WhatsAppButton } from '../components/ui/Buttons';
import ServiceCard from '../components/cards/ServiceCard';
import BookingCTA from '../components/sections/BookingCTA';
import ReviewSlider from '../components/sections/ReviewSlider';
import { IMAGES } from '../config/images';
import { HOME_SERVICES } from '../data/services';
import { HOME_LOOKBOOK } from '../data/gallery';
import { enquiryMessage } from '../utils/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

const MAKEUP_LIST = ['Bridal Makeup', 'Engagement Makeup', 'Party Makeup', 'Special Occasion Makeup'];

export default function Home() {
  usePageMeta('');

  return (
    <>
      <HomeHero />
      <FeatureStrip />

      <section className="section">
        <div className="container split">
          <div className="split__content">
            <SectionHeading
              kicker="About OBARBA"
              title={
                <>
                  More Than a Salon,
                  <br /> It’s a <em>Lifestyle</em>
                </>
              }
              text="At OBARBA, we believe in enhancing your natural beauty and confidence with premium grooming services, expert stylists and a luxurious experience."
            />
            <ButtonLink to="/about">Know More</ButtonLink>
          </div>
          <div className="split__media framed">
            <Photo image={IMAGES.interiorModern} />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-services-title">
        <div className="container">
          <SectionHeading
            id="home-services-title"
            align="center"
            kicker="Our Services"
            title={
              <>
                Crafted for <em>Every</em> You
              </>
            }
            text="Precision haircuts and beard styling, hair treatments, beauty services and professional makeup — every service begins with a conversation about you."
          />
          <FadeSlider
            items={HOME_SERVICES}
            label="OBARBA services"
            renderItem={(service) => <ServiceCard {...service} />}
          />
          <div className="section-actions">
            <ButtonLink to="/men/services">Men’s Services</ButtonLink>
            <ButtonLink to="/women/services">Women’s Services</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--reverse">
          <div className="split__media framed framed--tall">
            <Photo image={IMAGES.bridalBride} />
          </div>
          <div className="split__content">
            <SectionHeading
              kicker="Makeup Artistry"
              title={
                <>
                  Your Day, <em>Beautifully</em> Yours
                </>
              }
              text="From your engagement to your wedding day and every celebration in between — makeup designed around your features, your outfit and the moment."
            />
            <ul className="tick-list">
              {MAKEUP_LIST.map((item) => (
                <li key={item}>
                  <Icon name="sparkle" size={14} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="actions">
              <ButtonLink to="/bridal-party-makeup" variant="gold">
                Bridal &amp; Party Makeup
              </ButtonLink>
              <WhatsAppButton variant="ghost" message={enquiryMessage('bridal and party makeup')}>
                Enquire
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-lookbook-title">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading
              id="home-lookbook-title"
              kicker="The Lookbook"
              title={
                <>
                  A Glimpse of the <em>Craft</em>
                </>
              }
            />
            <TextLink to="/gallery">View full gallery</TextLink>
          </div>
          <FadeSlider
            items={HOME_LOOKBOOK}
            perView={{ 0: 4 }}
            layout="editorial"
            interval={7500}
            label="Lookbook"
            renderItem={(g) => (
              <Link to={`/gallery?category=${g.category}`} className="look-tile">
                <Photo image={g.image} />
                <span className="look-tile__caption">{g.caption}</span>
              </Link>
            )}
          />
          <SampleNotice>Temporary sample photography — to be replaced with OBARBA’s own work.</SampleNotice>
        </div>
      </section>

      <section className="section" aria-labelledby="home-reviews-title">
        <div className="container">
          <SectionHeading
            id="home-reviews-title"
            align="center"
            kicker="Client Stories"
            title={
              <>
                Words From Our <em>Guests</em>
              </>
            }
          />
          <ReviewSlider />
          <div className="section-actions">
            <TextLink to="/reviews">Read all reviews</TextLink>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
