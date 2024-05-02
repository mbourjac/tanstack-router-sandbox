import { createFileRoute, redirect } from '@tanstack/react-router';
import { ProtectedLayout } from '../../layouts/ProtectedLayout';
import type { AllRoutes } from '../../lib/tanstack-router';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isLoggedIn) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as AllRoutes,
        },
      });
    }
  },
});
