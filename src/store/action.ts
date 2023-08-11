import { createAction } from '@reduxjs/toolkit';
import { ApartmentOffer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('changeCity', (city: string) => ({
  payload: city,
}));

export const getOffersList = createAction(
  'getOffersList',
  (offers: ApartmentOffer[]) => ({ payload: offers }),
);

export const changeSorting = createAction(
  'changeSorting',
  (sorting: string) => ({ payload: sorting }),
);

export const setOffersDataLoadingStatus = createAction(
  'setOffersDataLoadingStatus',
  (data: boolean) => ({ payload: data }),
);

export const requireAuthorization = createAction(
  'requireAuthorization',
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
  }),
);
