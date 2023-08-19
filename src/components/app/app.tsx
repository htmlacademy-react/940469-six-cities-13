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
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { store } from '../../store';
import {
  checkAuthorizationAction,
  fetchOffersAction,
} from '../../store/api-action';

//TODO: Нужно не забыть реализовать Layout, NavLink, Link и Suspense.

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthorizationAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading,
  );

  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isOffersDataLoading || isDataLoading) {
    return <Spinner />;
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
