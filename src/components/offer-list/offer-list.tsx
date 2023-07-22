/*import Card from '../../components/card/card'; */
import {ApartmentOffer} from '../../types/offer';

type OfferListProps = {
  rentalOffers: number;
  offers: ApartmentOffer[];
};

function OfferList({rentalOffers, offers}: OfferListProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {rentalOffers} places to stay in Amsterdam
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <article key={offer.id} className="cities__card place-card">
            {offer.isPremium ? <div className="place-card__mark"><span>isPremium</span></div> : ''}
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img
                  className="place-card__image"
                  src={offer.previewImage}
                  width="260"
                  height="200"
                  alt={offer.title}
                />
              </a>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{offer.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className={offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width:`${(offer.rating * 20).toString()}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">{offer.title}</a>
              </h2>
              <p className="place-card__type">{offer.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OfferList;
