import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getErrorMessage } from '../../helpers/errors';
import { baseAPI } from '../../lib/axios.instance';
import { createSelectors } from '../../lib/zustand.utils';
import { loginRequest } from './auth.api';
import { authSchema } from './auth.schemas';
import type { Auth, LoginUser } from './auth.types';

type AuthStore = {
  auth: Auth | null;
  login: (loginData: LoginUser) => Promise<void>;
  logout: () => void;
};

export const useAuthStoreBase = create<AuthStore>()(
  persist(
    (set) => ({
      auth: null,
      login: async (loginData) => {
        try {
          const auth = await loginRequest(loginData);
          const parsedAuth = authSchema.parse(auth);

          set({ auth: parsedAuth });
        } catch (error) {
          toast.error(getErrorMessage(error));
        }
      },
      logout: () => {
        set({ auth: null });
        delete baseAPI.defaults.headers.Authorization;
      },
    }),
    {
      name: import.meta.env.VITE_AUTH_STORAGE_KEY ?? 'auth-storage',
    },
  ),
);

// generate selectors for zustand store: https://docs.pmnd.rs/zustand/guides/auto-generating-selectors
export const useAuthStore = createSelectors(useAuthStoreBase);
