import {ApartmentReview} from '../types/review';

const reviews: ApartmentReview[] = [
  {
    id: self.crypto.randomUUID(),
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-06-29T21:00:00.420Z',
    rating: 3,
    user: {
      name: 'Emely',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/4.jpg',
      isPro: true,
    },
  },
  {
    id: self.crypto.randomUUID(),
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2023-06-29T21:00:00.420Z',
    rating: 3,
    user: {
      name: 'Corey',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/3.jpg',
      isPro: true,
    },
  },
  {
    id: self.crypto.randomUUID(),
    comment:
      'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2023-06-26T21:00:00.420Z',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/7.jpg',
      isPro: false,
    },
  },
  {
    id: self.crypto.randomUUID(),
    comment:
      'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2023-06-26T21:00:00.420Z',
    rating: 2,
    user: {
      name: 'Max',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/1.jpg',
      isPro: false,
    },
  },
];

export default reviews;
