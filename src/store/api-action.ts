import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types';
import { APIRoute, AuthorizationStatus } from '../const';
import {
  getOffersList,
  setOffersDataLoadingStatus,
  requireAuthorization,
  getUser,
  redirectToRoute,
} from './action';
import { ApartmentOffer } from '../types/offer';
import { AutorizationData, UserData } from '../types/autorization-data';
import { saveToken, dropToken } from '../services/token';
import {dropLogin, saveLogin} from '../services/login';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuestions', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<ApartmentOffer[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(getOffersList(data));
});
/* Последний маршрут, возможно, не очень нужен и будет убран. */
export const loginAction = createAsyncThunk<
  void,
  AutorizationData,
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
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.AuthorizationData);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});
