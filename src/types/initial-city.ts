import { ApartmentOffer } from './offer';
import {AuthorizationStatus} from '../const';

export type InitialCityType = {
  city: string;
  offers: ApartmentOffer[];
  sorting: string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: string;
  error: string;
};
