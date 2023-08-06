import { ApartmentOffer } from './offer';
import { INITIAL_CITY } from '../const';

export type InitialCityType = {
  city: typeof INITIAL_CITY;
  offers: ApartmentOffer[];
};
