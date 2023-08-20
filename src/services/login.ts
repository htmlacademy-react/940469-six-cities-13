import { AUTH_EMAIL_KEY_NAME } from '../const';

export type Email = string;

export const getLogin = (): Email => {
  const email = localStorage.getItem(AUTH_EMAIL_KEY_NAME);
  return email ?? '';
};

export const saveLogin = (email: Email): void => {
  localStorage.setItem(AUTH_EMAIL_KEY_NAME, email);
};

export const dropLogin = (): void => {
  localStorage.removeItem(AUTH_EMAIL_KEY_NAME);
};
