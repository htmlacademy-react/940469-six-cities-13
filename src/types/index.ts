import { store } from '../store';

import {AuthorizationStatus} from '../const';

export type UserAuthorizationProcess = {
  authorizationStatus: AuthorizationStatus;
};


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
