import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import {
  checkAuthorizationAction,
  loginAction,
  logoutAction,
} from '../api-action';

const initialState: {
  authorizationStatus:AuthorizationStatus;
} = {
  authorizationStatus:AuthorizationStatus.Unknown,
};


export const userAuthorizationProcess = createSlice({
  name: NameSpace.UserAuthorization,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorizationAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
