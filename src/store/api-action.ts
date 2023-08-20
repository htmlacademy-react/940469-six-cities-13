import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types';
import { APIRoute } from '../const';
import {
  getOffersList,
  setOffersDataLoadingStatus,
  getUser,
  redirectToRoute,
  getOffer,
  getReviews,
  getNeighborhoodOffers,
  setDataLoadingStatus,
} from './action';
import { ApartmentOffer } from '../types/offer';
import { AuthorizationData, UserData } from '../types/authorization-data';
import { saveToken, dropToken } from '../services/token';
import { dropLogin, saveLogin } from '../services/login';
import { ApartmentReview } from '../types/review';
import { CommentData } from '../types/comment-data';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffersList', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<ApartmentOffer[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(getOffersList(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/getOffer', async (id, { dispatch, extra: api }) => {
  const { data: oneOffer } = await api.get<ApartmentOffer>(
    `${APIRoute.Offers}/${id}`,
  );
  const { data: offerReviews } = await api.get<ApartmentReview[]>(
    `${APIRoute.Comments}/${id}`,
  );
  const { data: neighborhoodOffers } = await api.get<ApartmentOffer[]>(
    `${APIRoute.Offers}/${id}/nearby`,
  );
  dispatch(setDataLoadingStatus(true));
  dispatch(getOffer(oneOffer));
  dispatch(getReviews(offerReviews));
  dispatch(getNeighborhoodOffers(neighborhoodOffers));
  dispatch(setDataLoadingStatus(false));
});

/* Последний маршрут, возможно, не очень нужен и будет убран. */
export const loginAction = createAsyncThunk<
  void,
  AuthorizationData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.AuthorizationData, {
    email,
    password,
  });
  saveToken(token);
  saveLogin(email);
  dispatch(getUser(email));
  dispatch(redirectToRoute(APIRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dropLogin();
  dispatch(getUser(''));
});

export const checkAuthorizationAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, {extra: api }) => {
  await api.get(APIRoute.AuthorizationData);
});

export const sendComment = createAsyncThunk<
  void,
  CommentData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'comment/sendComment',
  async ({ comment, rating, id }, { dispatch, extra: api }) => {
    await api.post<CommentData>(`${APIRoute.Comments}/${id}`, {
      comment,
      rating,
    });
    dispatch(fetchOfferAction(id));
  },
);
