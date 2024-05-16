import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getErrorMessage } from '../../helpers/errors';
import { baseAPI } from '../../lib/axios.instance';
import { loginRequest } from './auth.api';
import type { Auth, LoginUser } from './auth.types';

type AuthStore = {
  auth: Auth;
  login: (loginData: LoginUser) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => {
      const loggedOutState = {
        isLoggedIn: false as const,
        userId: null,
        token: null,
        role: null,
      };

      return {
        auth: loggedOutState,

        login: async (loginData) => {
          try {
            const authData = await loginRequest(loginData);
            set({ auth: { isLoggedIn: true, ...authData } });
          } catch (error) {
            toast(getErrorMessage(error));
          }
        },

        logout: () => {
          delete baseAPI.defaults.headers.Authorization;
          set({ auth: loggedOutState });
        },
      };
    },
    {
      name: import.meta.env.VITE_LOCAL_AUTH_KEY ?? 'auth-storage',
    },
  ),
);
