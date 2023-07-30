import { ApartmentReview } from '../../types/review';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ApartmentReview[];
};
export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
      ;
    </ul>
  );
}
