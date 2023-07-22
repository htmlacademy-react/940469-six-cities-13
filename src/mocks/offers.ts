import {ApartmentOffer} from '../types/offer';

export const offers: ApartmentOffer[] = [
  {
    id: self.crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 255,
    previewImage: 'https://13.design.pages.academy/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.1,
    images: [
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/15.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
    ],
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    goods: ['Cable TV', 'Washer', 'Baby seat', 'Towels', 'Washing machine'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    bedrooms: 3,
    maxAdults: 8,
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 106,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
    images: [
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
    ],
    description:
      'This is a place for dreamers to reset, reflect, and create. Designed with a &#8216; slow &#8217; pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    goods: [
      'Towels',
      'Dishwasher',
      'Wi-Fi',
      'Washer',
      'Baby seat',
      'Air conditioning',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    bedrooms: 4,
    maxAdults: 4,
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Tile House',
    type: 'apartment',
    price: 446,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    images: [
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
    ],
    description:
      'This is a place for dreamers to reset, reflect, and create. Designed with a &#8216; slow &#8217; pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    goods: ['Wi-Fi', 'Washing machine', 'Coffee machine', 'Fridge'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    bedrooms: 2,
    maxAdults: 3,
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 161,
    previewImage: 'https://13.design.pages.academy/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    images: [
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
    ],
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    goods: [
      'Baby seat',
      'Laptop friendly workspace',
      'Washer',
      'Air conditioning',
      'Towels',
      'Heating',
      'Dishwasher',
      'Breakfast',
      'Cable TV',
      'Kitchen',
      'Wi-Fi',
      'Coffee machine',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
    },
    'bedrooms': 1,
    'maxAdults': 2
  },
];
