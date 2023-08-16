export type ApartmentOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  images: string[];
  description: string;
  host: OfferHost;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
};

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  name: string;
  location: OfferLocation;
};

export type OfferHost = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};
