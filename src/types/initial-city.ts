import { ApartmentOffer } from './offer';
import { ApartmentReview } from './review';

export type InitialCityType = {
  city: string;
  offers: ApartmentOffer[];
  sorting: string;
  isOffersDataLoading: boolean;
  user: string;
  oneOffer: null | ApartmentOffer;
  offerReviews: [] | ApartmentReview[];
  neighborhoodOffers: [] | ApartmentOffer[];
  isDataLoading: boolean;
};
