import { ReviewStar } from '../../types/star';
import { ChangeEvent, memo } from 'react';


type RatingProps = {
  stars: ReviewStar[];
  setRating: (rating: number) => void;
};

function Rating({ stars, setRating }: RatingProps): JSX.Element {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(target.value);
    setRating(+rating);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {stars.map((star) => (
        <div key={star.id}>
          <input
            onChange={handleChange}
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

export default memo(Rating);

