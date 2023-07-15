import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Status, Authorization } from '../../const';

type AppProps = {
  rentalOffers: number;
};

//TODO: Потом в Offer, вероятно, будет динамическая маршрутизация.
//TODO: А еще, нужно не забыть реализовать Layout, NavLink, Link и Suspense.

function App({ rentalOffers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Authorization.Main}>
            <Route index element={<Main rentalOffers={rentalOffers} />} />
            <Route path={Authorization.Login} element={<Login />}></Route>
            <Route
              path={Authorization.Favorites}
              element={
                <PrivateRoute status={Status.NoAuth}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={Authorization.Offer} element={<Offer />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
