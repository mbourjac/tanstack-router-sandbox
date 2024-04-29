import { createFileRoute } from '@tanstack/react-router';
import type { AllRoutes } from '../../lib/tanstack-router';
import { Login } from '../../pages/Login';

export type LoginParams = {
  redirect?: AllRoutes;
};

export const Route = createFileRoute('/_public/login')({
  component: Login,
  validateSearch: (search: Record<string, unknown>): LoginParams => ({
    redirect: search.redirect as AllRoutes,
  }),
});
