import { State } from '../../types';
import { AuthorizationStatus, NameSpace } from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => {
  state[NameSpace.UserAuthorization].authorizationStatus;
};
export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.UserAuthorization].authorizationStatus !== AuthorizationStatus.Unknown;
