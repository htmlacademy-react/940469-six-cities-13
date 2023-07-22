export type ApartmentReview = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: ReviewUser;
};

export type ReviewUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
