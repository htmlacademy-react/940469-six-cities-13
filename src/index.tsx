import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { fetchOffersAction } from './services/api-action';
import { reviews } from './mocks/reviews';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthorizationAction } from './services/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthorizationAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App reviews={reviews}></App>
    </Provider>
  </React.StrictMode>,
);
