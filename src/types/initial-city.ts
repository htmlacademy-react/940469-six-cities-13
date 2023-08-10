import { ApartmentOffer } from './offer';

export type InitialCityType = {
  city: string;
  offers: ApartmentOffer[];
  sorting: string;
  isOffersDataLoading: boolean;
  filteredOffers: ApartmentOffer[];
};
