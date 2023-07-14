import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  rentalOffers: number;
};

function App({ rentalOffers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main rentalOffers={rentalOffers} />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="favorites" element={<Favorites />}></Route>
            <Route path="offer">
              <Route index element={<Offer />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
