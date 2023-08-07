import { createAction } from '@reduxjs/toolkit';
import { ApartmentOffer } from '../types/offer';

export const changeCity = createAction('changeCity', (city: string) => ({payload: city}));

export const getOffersList = createAction('getOffersList', (offers: ApartmentOffer[]) => ({payload: offers}));
