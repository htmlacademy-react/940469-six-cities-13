import { ReviewStar } from '../../types/star';

type RatingProps = {
  stars: ReviewStar[];
};
export default function Rating({ stars }: RatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {stars.map((star) => (
        <div key={star.id}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star.mark}
            id={`${star.mark}-stars`}
            type="radio"
          />
          <label
            htmlFor={`${star.mark}-stars`}
            className="reviews__rating-label form__rating-label"
            title={star.decoding}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
      ))}
    </div>
  );
}
