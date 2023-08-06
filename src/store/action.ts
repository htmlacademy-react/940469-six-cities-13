import { createAction } from '@reduxjs/toolkit';
import { ApartmentOffer } from '../types/offer';
import { INITIAL_CITY } from '../const';

export const changeCity = createAction<typeof INITIAL_CITY>('changeCity');

export const getOffersList = createAction('getOffersList', (offers: ApartmentOffer[]) => ({payload: offers}));
