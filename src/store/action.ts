import { createAction } from '@reduxjs/toolkit';
import { ApartmentOffer } from '../types/offer';
import { APIRoute } from '../const';
import { ApartmentReview } from '../types/review';

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
  (authorizationStatus: string) => ({
    payload: authorizationStatus,
  }),
);

export const getUser = createAction('getUser', (user: string) => ({
  payload: user,
}));

export const redirectToRoute = createAction(
  'redirectToRoute',
  (redirect: APIRoute) => ({ payload: redirect }),
);

export const getOffer = createAction('getOffer', (offer: ApartmentOffer) => ({
  payload: offer,
}));

export const getReviews = createAction(
  'getReviews',
  (reviews: ApartmentReview[]) => ({ payload: reviews }),
);

export const getNeighborhoodOffers = createAction(
  'getNeighborhoodOffers',
  (neighborhoodOffers: ApartmentOffer[]) => ({ payload: neighborhoodOffers }),
);

export const setDataLoadingStatus = createAction(
  'setDataLoadingStatus',
  (data: boolean) => ({ payload: data }),
);
