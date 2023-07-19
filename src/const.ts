export const Card = {
  rentalOffers: 5,
} as const;

export enum Authorization {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}
