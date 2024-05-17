import axios from 'axios';
import { useAuthStore } from '../services/auth/auth.store';

export const baseAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {},
});

baseAPI.interceptors.request.use(function (config) {
  const { token } = useAuthStore.getState().auth;

  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});
