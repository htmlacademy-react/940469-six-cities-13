import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userAuthorizationProcess } from './user-authorization-process/user-authorization-process';

export const rootReducer = combineReducers({
  [NameSpace.UserAuthorization]: userAuthorizationProcess.reducer,
});
