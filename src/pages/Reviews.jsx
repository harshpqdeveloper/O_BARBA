import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { WhatsAppButton } from '../components/ui/Buttons';
import Icon from '../components/ui/Icon';
import BookingCTA from '../components/sections/BookingCTA';
import ReviewSlider from '../components/sections/ReviewSlider';
import { IMAGES } from '../config/images';
import { SITE } from '../config/site';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Reviews() {
  usePageMeta('Reviews', 'What OBARBA clients say about their grooming, hair, beauty and makeup experiences.');

  return (
    <>
      <PageHero
        kicker="Reviews"
        title={
          <>
            Words From Our <em>Guests</em>
          </>
        }
        text="Every visit is personal. Here’s what clients say about their OBARBA experience."
        image={IMAGES.interiorChair}
        crumbs={[{ label: 'Reviews' }]}
      />

      <section className="section">
        <div className="container">
          <ReviewSlider />
        </div>
      </section>

      <section className="section section--alt section--compact">
        <div className="container join-band">
          <SectionHeading
            kicker="Your Feedback"
            title={
              <>
                Share Your <em>Experience</em>
              </>
            }
            text="Visited OBARBA recently? We’d love to hear how it went."
          />
          <div className="actions">
            <WhatsAppButton variant="outline" message="Hello OBARBA, I’d like to share feedback about my recent visit.">
              Send Feedback
            </WhatsAppButton>
            {SITE.reviewLink && (
              <a className="btn btn--ghost" href={SITE.reviewLink} target="_blank" rel="noopener noreferrer">
                <span>Write a Review</span>
                <Icon name="arrowRight" size={16} />
              </a>
            )}
          </div>
        </div>
      </section>

      <BookingCTA image={IMAGES.interiorWarm} />
    </>
  );
}
