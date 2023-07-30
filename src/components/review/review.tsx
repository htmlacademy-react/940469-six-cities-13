import { ApartmentReview } from '../../types/review';

type ReviewProps = {
  review: ApartmentReview;
};

//TODO: Написать функцию для преобразования даты в человекочитаемый формат.
//TODO: Все вычисления будут собраны в функции и перенесены в компонент с функциями.

export default function Review({ review }: ReviewProps) {
  const { id, user, rating, date, comment } = review;

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(rating * 20).toString()}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {date}
        </time>
      </div>
    </li>
  );
}
