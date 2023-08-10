import { useState, useEffect } from 'react';
import Card from '../../components/card/card';
import { ApartmentOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import Sorting from '../sorting/sorting';

type OfferListProps = {
  offers: ApartmentOffer[];
  handleOnMouseMove: (id: string) => void;
};

//TODO: Возможно, функцию сортировки лучше будет вынести в отдельный модуль, а результат сортировки сохранить в store.

function OfferList({ offers, handleOnMouseMove }: OfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  useEffect(() => {
    if (activeCard) {
      handleOnMouseMove(activeCard);
    }
  }, [activeCard, handleOnMouseMove]);

  const activeCity = useAppSelector((state) => state.city);
  const activeSorting = useAppSelector((state) => state.sorting);
  const filteredOffers = offers.filter(
    (offer) => offer.city.name === activeCity,
  );

  function getSortingOffers(sorting: string) {
    switch (sorting) {
      case 'Price: low to high':
        return [...filteredOffers].sort((a, b) => (a.price > b.price ? 1 : -1));
      case 'Price: high to low':
        return [...filteredOffers].sort((a, b) => (a.price < b.price ? 1 : -1));
      case 'Top rated first':
        return [...filteredOffers].sort((a, b) =>
          b.rating > a.rating ? 1 : -1,
        );
      default:
        return [...filteredOffers];
    }
  }

  const sortingOffers = getSortingOffers(activeSorting);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortingOffers.length} places to stay in {activeCity}
      </b>
      <Sorting activeSorting={activeSorting} />
      <div className="cities__places-list places__list tabs__content">
        {sortingOffers.map((offer) => (
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
