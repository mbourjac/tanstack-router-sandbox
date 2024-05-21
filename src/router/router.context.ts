import type { QueryClient } from '@tanstack/react-query';
import type { Auth } from '../services/auth/auth.types';
import { userService } from '../services/user/user.service';

export type RouterContext = {
  queryClient: QueryClient;
  auth: Auth;
  userService: typeof userService;
};

export const routerContext: RouterContext = {
  queryClient: undefined!,
  auth: undefined!,
  userService,
};
