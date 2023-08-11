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

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const URL_TITLE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const OPEN_STREET_MAP =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const INITIAL_CITY = 'Paris';

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const INITIAL_SORTING = 'Popular';

export const sorting = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export const DATA_URL = 'https://13.design.pages.academy/six-cities';

export const TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export enum APIRoute {
  Offers = '/offers',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
