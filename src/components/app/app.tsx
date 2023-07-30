import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Authorization } from '../../const';
import { ApartmentOffer } from '../../types/offer';

type AppProps = {
  rentalOffers: number;
  offers: ApartmentOffer[];
  /*reviews: ApartmentReview[];*/
};

//TODO: Потом в Offer, вероятно, будет динамическая маршрутизация.
//TODO: А еще, нужно не забыть реализовать Layout, NavLink, Link и Suspense.

function App({ rentalOffers, offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Authorization.Main}>
            <Route index element={<Main offers ={offers} rentalOffers={rentalOffers}/>} />
            <Route path={Authorization.Login} element={<Login />}></Route>
            <Route
              path={Authorization.Favorites}
              element={
                <PrivateRoute isAuth>
                  <Favorites offers ={offers}/>
                </PrivateRoute>
              }
            />
            <Route path={`${Authorization.Offer}/:id`} element={<Offer />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
