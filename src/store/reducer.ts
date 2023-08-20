import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_CITY, INITIAL_SORTING } from '../const';
import { InitialCityType } from '../types/initial-city';
import {
  changeCity,
  getOffersList,
  changeSorting,
  setOffersDataLoadingStatus,
  getUser,
  getOffer,
  getReviews,
  getNeighborhoodOffers,
  setDataLoadingStatus,
} from './action';

const initialCity: InitialCityType = {
  city: INITIAL_CITY,
  offers: [],
  sorting: INITIAL_SORTING,
  isOffersDataLoading: false,
  user: '',
  oneOffer: null,
  offerReviews: [],
  neighborhoodOffers: [],
  isDataLoading: false,
};

export const reducer = createReducer<InitialCityType>(
  initialCity,
  (builder) => {
    builder.addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
    builder.addCase(getOffersList, (state, action) => {
      state.offers = action.payload;
    });
    builder.addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
    builder.addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
    builder.addCase(getUser, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getOffer, (state, action) => {
      state.oneOffer = action.payload;
    });
    builder.addCase(getReviews, (state, action) => {
      state.offerReviews = action.payload;
    });
    builder.addCase(getNeighborhoodOffers, (state, action) => {
      state.neighborhoodOffers = action.payload;
    });
    builder.addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
  },
);
