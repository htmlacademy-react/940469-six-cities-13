import {store} from '../store';
import {setError} from '../store/action';
import {clearErrorAction} from '../services/api-action';

export const errorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
