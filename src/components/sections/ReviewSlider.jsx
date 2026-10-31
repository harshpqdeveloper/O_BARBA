import FadeSlider from '../ui/FadeSlider';
import ReviewCard from '../cards/ReviewCard';
import { REVIEWS } from '../../data/reviews';

/** Client reviews two at a time (one on phones), with previous / next buttons to move through them. */
export default function ReviewSlider() {
  return (
    <FadeSlider
      items={REVIEWS}
      perView={{ 0: 1, 760: 2 }}
      interval={10000}
      arrows
      label="Client reviews"
      className="review-slider"
      renderItem={(review) => <ReviewCard {...review} />}
    />
  );
}
