import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { Authorization } from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

//TODO: Нужно не забыть реализовать Layout, NavLink, Link и Suspense.

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading,
  );

  if (isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={Authorization.Main}>
            <Route index element={<Main />} />
            <Route path={Authorization.Login} element={<Login />}></Route>
            <Route
              path={Authorization.Favorites}
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={`${Authorization.Offer}/:id`}
              element={<Offer />}
            >
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
