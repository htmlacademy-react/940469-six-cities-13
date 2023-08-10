import axios, {AxiosInstance} from 'axios';
import {DATA_URL, TIMEOUT} from '../const';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: DATA_URL,
    timeout: TIMEOUT,
  });

  return api;
};
