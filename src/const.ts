import { ReviewStar } from './types/star';

export const Card = {
  rentalOffers: 5,
} as const;

export enum Authorization {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export const stars: ReviewStar[] = [
  {
    id: crypto.randomUUID(),
    mark: 5,
    decoding: 'perfect',
  },
  {
    id: crypto.randomUUID(),
    mark: 4,
    decoding: 'good',
  },
  {
    id: crypto.randomUUID(),
    mark: 3,
    decoding: 'not bad',
  },
  {
    id: crypto.randomUUID(),
    mark: 2,
    decoding: 'badly',
  },
  {
    id: crypto.randomUUID(),
    mark: 1,
    decoding: 'terribly',
  },
];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
