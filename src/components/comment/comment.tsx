import { useState, ChangeEvent } from 'react';
import Rating from '../rating/rating';
import { stars } from '../../const';

type comment = {
  comment: string;
};

function Comment(): JSX.Element {
  const [, setComment] = useState<comment>();

  const handleInput =
    () => ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      const comment = target.value;
      setComment((inputComment) => ({ ...inputComment, comment }));
    };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating stars={stars} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={handleInput}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Comment;
