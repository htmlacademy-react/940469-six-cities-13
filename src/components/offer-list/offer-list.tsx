import { useState, useEffect } from 'react';
import Card from '../../components/card/card';
import { ApartmentOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks';

type OfferListProps = {
  offers: ApartmentOffer[];
  handleOnMouseMove: (id: string) => void;
};

function OfferList({
  offers,
  handleOnMouseMove,
}: OfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  useEffect(() => {
    if (activeCard) {
      handleOnMouseMove(activeCard);
    }
  }, [activeCard, handleOnMouseMove]);

  const activeCity = useAppSelector((state) => state.city);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.filter((offer) => offer.city.name === activeCity).length} places to stay in {activeCity}
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
        {offers
          .filter((offer) => offer.city.name === activeCity)
          .map((offer) => (
            <Card
              offer={offer}
              key={offer.id}
              handleOnMouseMove={(id) => setActiveCard(id)}
            />
          ))}
        ;
      </div>
    </section>
  );
}

export default OfferList;
