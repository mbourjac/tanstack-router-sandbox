import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../helpers/errors';
import { baseAPI } from '../../lib/axios.instance';
import { loginRequest } from './auth.api';
import { authSchema } from './auth.schemas';
import { useAuthStore } from './auth.store';
import type { LoginUser } from './auth.types';

export const useAuthService = () => {
  const queryClient = useQueryClient();
  const setAuth = useAuthStore.use.setAuth();

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async (loginUserData: LoginUser) => {
      const auth = await loginRequest(loginUserData);
      return authSchema.parse(auth);
    },
    onSuccess: async (auth) => {
      setAuth(auth);
      await queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const logout = () => {
    setAuth(null);
    delete baseAPI.defaults.headers.Authorization;
  };

  return { loginMutation, logout };
};
