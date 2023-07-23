import { ApartmentOffer } from '../../types/offer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Authorization } from '../../const';

type CardProps = {
  offer: ApartmentOffer;
};

//TODO: Все вычисления будут собраны в функции и перенесены в компонент с функциями.

function Card({ offer }: CardProps): JSX.Element {
  const [, setActiveCard] = useState('');

  const cardId = `${Authorization.Offer}/${offer.id}`;

  const handleMouseEnter = () => {
    setActiveCard(offer.id);
  };

  const handleMouseLeave = () => {
    setActiveCard('');
  };

  return (
    <article
      key={offer.id}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="cities__card place-card"
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>isPremium</span>
        </div>
      ) : (
        ''
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={cardId}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              offer.isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
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
            <span
              style={{ width: `${(offer.rating * 20).toString()}%` }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={cardId}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
