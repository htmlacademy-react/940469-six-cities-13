import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_CITY, INITIAL_SORTING } from '../const';
import { InitialCityType } from '../types/initial-city';
import {changeCity, getOffersList, changeSorting, setOffersDataLoadingStatus} from './action';

const initialCity: InitialCityType = {
  city: INITIAL_CITY,
  offers: [],
  sorting: INITIAL_SORTING,
  isOffersDataLoading: false,
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
    })
  },
);
