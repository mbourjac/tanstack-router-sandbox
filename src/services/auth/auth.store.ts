import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getErrorMessage } from '../../helpers/errors';
import { baseAPI } from '../../lib/axios.instance';
import { createSelectors } from '../../lib/zustand.utils';
import { loginRequest } from './auth.api';
import { authDataSchema } from './auth.schemas';
import type { Auth, LoginUser } from './auth.types';

type AuthStore = {
  auth: Auth;
  login: (loginData: LoginUser) => Promise<void>;
  logout: () => void;
};

export const useAuthStoreBase = create<AuthStore>()(
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
            const data = await loginRequest(loginData);
            const authData = authDataSchema.parse(data);

            set({ auth: { isLoggedIn: true, ...authData } });
          } catch (error) {
            toast.error(getErrorMessage(error));
          }
        },

        logout: () => {
          set({ auth: loggedOutState });
          delete baseAPI.defaults.headers.Authorization;
        },
      };
    },
    {
      name: import.meta.env.VITE_LOCAL_AUTH_KEY ?? 'auth-storage',
    },
  ),
);

// generate selectors for zustand store: https://docs.pmnd.rs/zustand/guides/auto-generating-selectors
export const useAuthStore = createSelectors(useAuthStoreBase);
