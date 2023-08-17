import { ChangeEvent, FormEvent, useState } from 'react';
import Rating from '../rating/rating';
import { AuthorizationStatus, stars } from '../../const';
import { sendComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';

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
          <button className="reviews__submit form__submit button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <div>
        <strong>
          <p>
            Здесь должна быть форма для отправки комментариев, но она доступна
            только зарегистрированным пользователям.
          </p>
          <p>Пожалуйста авторизуйтесь, чтобы оставить комментарий.</p>
        </strong>
      </div>
    );
  }
}

export default Comment;
