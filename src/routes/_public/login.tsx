import { createFileRoute } from '@tanstack/react-router';
import { Login } from '../../pages/Login';
import type { AllRoutes } from '../../router/router.types';

export type LoginParams = {
  redirect?: AllRoutes;
  isLogout?: boolean;
};

export const Route = createFileRoute('/_public/login')({
  component: Login,
  validateSearch: (search: Record<string, unknown>): LoginParams => ({
    redirect: search.redirect as AllRoutes,
    isLogout: search.isLogout as boolean,
  }),
});
