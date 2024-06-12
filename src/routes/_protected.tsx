import { createFileRoute, redirect } from '@tanstack/react-router';
import { ProtectedLayout } from '../layouts/ProtectedLayout/ProtectedLayout';
import { ProtectedLayoutError } from '../layouts/ProtectedLayout/ProtectedLayoutError';
import { ProtectedLayoutSkeleton } from '../layouts/ProtectedLayout/ProtectedLayoutSkeleton';
import type { AllRoutes } from '../router/router.types';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
  pendingComponent: ProtectedLayoutSkeleton,
  errorComponent: ProtectedLayoutError,
  beforeLoad: ({ context: { baseAPI, auth }, location }) => {
    if (!auth) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as AllRoutes,
        },
      });
    }

    baseAPI.defaults.headers.Authorization = `Bearer ${auth.token}`;

    return { auth };
  },
});
