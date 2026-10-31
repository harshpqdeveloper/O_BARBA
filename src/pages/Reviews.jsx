import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { WhatsAppButton } from '../components/ui/Buttons';
import Icon from '../components/ui/Icon';
import ReviewCard from '../components/cards/ReviewCard';
import BookingCTA from '../components/sections/BookingCTA';
import { IMAGES } from '../config/images';
import { SITE } from '../config/site';
import { REVIEWS } from '../data/reviews';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Reviews() {
  usePageMeta('Reviews', 'What OBARBA clients say about their grooming, hair, beauty and makeup experiences.');
  const [featured, ...rest] = REVIEWS;

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
          {featured && (
            <div className="review-featured">
              <ReviewCard {...featured} featured />
            </div>
          )}
          <div className="review-grid">
            {rest.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
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
