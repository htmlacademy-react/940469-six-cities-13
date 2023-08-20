import {ChangeEvent, FormEvent, FormHTMLAttributes, useState} from 'react';
import Rating from '../rating/rating';
import {AuthorizationStatus, CHECK_RATING, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, stars} from '../../const';
import { sendComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';

type CommentProps = {
  id: string;
};

function Comment({ id }: CommentProps): JSX.Element {
  const initialState = { id: id, comment: '', rating: 0 };

  const [commentData, setCommentData] = useState(initialState);

  const setRating = (value: number) => {
    setCommentData((inputComment) => ({ ...inputComment, rating: value }));
  };
  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = target.value;
    setCommentData((inputComment) => ({ ...inputComment, comment }));
  };

  const { comment, rating } = commentData;

  const dispatch = useAppDispatch();

  const isCheckComment = rating !== CHECK_RATING
    && comment.length <= MAX_COMMENT_LENGTH
    && comment.length >= MIN_COMMENT_LENGTH;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      dispatch(sendComment({ id: id, comment, rating }));
    }
  };

  const isAuthorization = useAppSelector((state) => state.authorizationStatus);

  if (isAuthorization === AuthorizationStatus.Auth) {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <Rating stars={stars} setRating={setRating} />
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={handleChange}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button disabled={!isCheckComment} className="reviews__submit form__submit button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <div>
        <strong>
          <p>There should be reviews form, but only for registered users.</p>
          <p>
            Please register! You will be able to use form and leave your review.
          </p>
        </strong>
      </div>
    );
  }
}

export default Comment;
