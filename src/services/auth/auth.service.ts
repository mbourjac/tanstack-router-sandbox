import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { baseAPI } from '../../api';
import { loginRequest } from './auth.api';
import type { Auth, LoginUser } from './auth.types';

type AuthService = {
  auth: Auth;
  login: (loginData: LoginUser) => Promise<void>;
  logout: () => void;
};

export const useAuthService = create<AuthService>()(
  persist(
    (set, get) => ({
      auth: get()?.auth ?? { isLoggedIn: false, role: null },

      login: async (loginData) => {
        const { role, token } = await loginRequest(loginData);

        set({ auth: { isLoggedIn: true, role } });
        baseAPI.defaults.headers.Authorization = `Bearer ${token}`;
      },

      logout: () => {
        set({ auth: { isLoggedIn: false, role: null } });
        delete baseAPI.defaults.headers.Authorization;
      },
    }),
    {
      name: import.meta.env.VITE_LOCAL_AUTH_KEY ?? 'auth-storage',
    },
  ),
);
