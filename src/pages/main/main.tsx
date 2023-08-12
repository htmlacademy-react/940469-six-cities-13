import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import MainTabs from '../../components/main-tabs/main-tabs';
import { useAppSelector } from '../../hooks';
import Header from '../header/header';

function Main(): JSX.Element {
  const [offerListActiveCard, setOfferListActiveCard] = useState('');

  const handleOnMouseMove = (activeCard: string) => {
    setOfferListActiveCard(activeCard);
  };

  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((store) => store.offers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainTabs activeCity={activeCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList offers={offers} handleOnMouseMove={handleOnMouseMove} />
            <div className="cities__right-section">
              <Map
                points={offers.filter((offer) => offer.city.name === activeCity)}
                selectedPoint={offerListActiveCard}
                classMap={'cities__map'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
