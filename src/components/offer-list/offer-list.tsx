import { useState, useEffect } from 'react';
import Card from '../../components/card/card';
import { ApartmentOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import Sorting from '../sorting/sorting';

type OfferListProps = {
  offers: ApartmentOffer[];
  handleOnMouseMove: (id: string) => void;
};

function OfferList({ offers, handleOnMouseMove }: OfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  useEffect(() => {
    if (activeCard) {
      handleOnMouseMove(activeCard);
    }
  }, [activeCard, handleOnMouseMove]);

  const activeCity = useAppSelector((state) => state.city);
  const activeSorting = useAppSelector((state) => state.sorting);

  function getSortingOffers(sorting: string) {
    switch (sorting) {
      case 'Price: low to high':
        return [...offers].sort((a, b) => a.price > b.price ? 1 : -1);
      case 'Price: high to low':
        return [...offers].sort((a, b) => a.price < b.price ? 1 : -1);
      case 'Top rated first':
        return [...offers].sort((a, b) => b.rating > a.rating ? 1 : -1);
      default:
        return [...offers];
    }
  }

  const sortingOffers = getSortingOffers(activeSorting);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortingOffers.filter((offer) => offer.city.name === activeCity).length} places
        to stay in {activeCity}
      </b>
      <Sorting activeSorting={activeSorting} />
      <div className="cities__places-list places__list tabs__content">
        {sortingOffers
          .filter((offer) => offer.city.name === activeCity)
          .map((offer) => (
            <Card
              offer={offer}
              key={offer.id}
              handleOnMouseMove={(id) => setActiveCard(id)}
            />
          ))}
      </div>
    </section>
  );
}

export default OfferList;
