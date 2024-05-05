import type { QueryClient } from '@tanstack/react-query';
import type { AxiosInstance } from 'axios';
import { baseAPI } from '../lib/axios.instance';
import { queryClient } from '../lib/react-query.client';
import type { Auth } from '../services/auth/auth.types';
import { userService } from '../services/user/user.service';

export type RouterContext = {
  auth: Auth;
  baseAPI: AxiosInstance;
  queryClient: QueryClient;
  userService: typeof userService;
};

export const routerContext: RouterContext = {
  auth: undefined!,
  baseAPI,
  queryClient,
  userService,
};
