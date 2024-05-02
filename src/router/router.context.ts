import type { Auth } from '../services/auth/auth.types';

export type RouterContext = {
  auth: Auth;
};

export const routerContext: RouterContext = {
  auth: undefined!,
};
