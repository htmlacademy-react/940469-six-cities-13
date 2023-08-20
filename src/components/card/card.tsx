import { ApartmentOffer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { Authorization } from '../../const';
import cn from 'classnames';
import { memo } from 'react';

type CardProps = {
  offer: ApartmentOffer;
  handleOnMouseMove: (id: string) => void;
};

//TODO: Все вычисления будут собраны в функции и перенесены в компонент с функциями.

function Card({ offer, handleOnMouseMove }: CardProps): JSX.Element {
  const {
    id,
    isPremium,
    previewImage,
    title,
    price,
    isFavorite,
    rating,
    type,
  } = offer;

  const cardId = `${Authorization.Offer}/${id}`;

  return (
    <article
      key={id}
      onMouseMove={() => {
        handleOnMouseMove(id);
      }}
      className="cities__card place-card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>isPremium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={cardId}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': isFavorite,
            })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(Math.round(rating) * 20).toString()}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={cardId}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(Card);
