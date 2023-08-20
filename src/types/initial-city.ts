import { ApartmentOffer } from './offer';
import { AuthorizationStatus } from '../const';
import { ApartmentReview } from './review';

export type InitialCityType = {
  city: string;
  offers: ApartmentOffer[];
  sorting: string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: string;
  oneOffer: null | ApartmentOffer;
  offerReviews: [] | ApartmentReview[];
  neighborhoodOffers: [] | ApartmentOffer[];
  isDataLoading: boolean;
};
