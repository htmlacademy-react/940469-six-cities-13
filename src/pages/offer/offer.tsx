import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Comment from '../../components/comment/comment';
import ReviewList from '../../components/review-list/review-list';
import NeighborhoodOfferList from '../../components/neighborhood-offer-list/neighborhood-offer-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchOfferAction } from '../../store/api-action';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import cn from 'classnames';
import NotFound from '../not-found/not-found';
import Map from '../../components/map/map';
import './offer.css';

//TODO: Компоненты «Список предложений неподалёку», «Карточка предложения неподалёку», «Карточка предложения» и «Список предложений» нужно отрефакторить.

export function Offer(): JSX.Element {
  const offers = useAppSelector((store) => store.offers);
  const params = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.oneOffer);
  const reviews = useAppSelector((state) => state.offerReviews);

  const neighborhoodOffers = useAppSelector(
    (state) => state.neighborhoodOffers,
  );

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(fetchOfferAction(params.id));
    }
  }, [dispatch, params.id]);

  if (params.id !== undefined) {
    if (offers.findIndex((id) => id.id === params.id) === -1) {
      return <NotFound />;
    }
  }

  const mapArray = [offer, ...neighborhoodOffers];
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities | Offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer !== null
                ? offer.images.map((image) => (
                  <div
                    className="offer__image-wrapper"
                    key={self.crypto.randomUUID()}
                  >
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))
                : ''}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer !== null
                ? offer.isPremium && (
                  <div className="offer__mark">
                    <span>isPremium</span>
                  </div>
                )
                : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer !== null ? offer.title : ''}
                </h1>
                {offer !== null ? (
                  <button
                    className={cn('offer__bookmark-button button', {
                      'offer__bookmark-button--active': offer.isFavorite,
                    })}
                    type="button"
                  >
                    <svg
                      className="offer__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                ) : (
                  ''
                )}
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  {offer !== null ? (
                    <span
                      style={{ width: `${(offer.rating * 20).toString()}%` }}
                    >
                    </span>
                  ) : (
                    ''
                  )}
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer !== null ? offer.rating : ''}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer !== null ? offer.type : ''}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer !== null ? offer.bedrooms : ''} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer !== null ? offer.maxAdults : ''} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">
                  &euro;{offer !== null ? offer.price : ''}
                </b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer !== null
                    ? offer.goods.map((good) => (
                      <li
                        className="offer__inside-item"
                        key={self.crypto.randomUUID()}
                      >
                        {good}
                      </li>
                    ))
                    : ''}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer !== null ? offer.host.avatarUrl : ''}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer !== null ? offer.host.name : ''}
                  </span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer !== null ? offer.description : ''}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                <Comment id={offer !== null ? offer.id : ''} />
              </section>
            </div>
          </div>
          {offer !== null ? (
            <Map
              selectedPoint={offer.id}
              points={mapArray.slice(0,4)}
              classMap={'offer__map'}
              city={neighborhoodOffers[0].city}
            />
          ) : (
            <div></div>
          )}
        </section>
        <div className="container">
          <NeighborhoodOfferList offers={neighborhoodOffers} />
        </div>
      </main>
    </div>
  );
}

export default Offer;
