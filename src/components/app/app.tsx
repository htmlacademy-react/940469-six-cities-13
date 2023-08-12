import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import { Authorization } from '../../const';
import { ApartmentReview } from '../../types/review';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppProps = {
  reviews: ApartmentReview[];
};

//TODO: Нужно не забыть реализовать Layout, NavLink, Link и Suspense.

function App({ reviews }: AppProps): JSX.Element {

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Authorization.Main}>
            <Route index element={<Main/>}/>
            <Route path={Authorization.Login} element={<Login />}></Route>
            <Route
              path={Authorization.Favorites}
              element={
                <PrivateRoute isAuth={false}>
                  <Favorites/>
                </PrivateRoute>
              }
            />
            <Route path={`${Authorization.Offer}/:id`} element={<Offer reviews={reviews}/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
