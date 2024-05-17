import type { QueryClient } from '@tanstack/react-query';
import { queryClient } from '../lib/react-query.client';
import type { Auth } from '../services/auth/auth.types';
import { userService } from '../services/user/user.service';

export type RouterContext = {
  auth: Auth;
  queryClient: QueryClient;
  userService: typeof userService;
};

export const routerContext: RouterContext = {
  auth: undefined!,
  queryClient,
  userService,
};
