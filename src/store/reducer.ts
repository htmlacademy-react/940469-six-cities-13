import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { INITIAL_CITY } from '../const';
import { InitialCityType } from '../types/initial-city';
import { changeCity, getOffersList } from './action';

const initialCity: InitialCityType = {
  city: INITIAL_CITY,
  offers: offers,
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
  },
);
