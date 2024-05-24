import { queryOptions } from '@tanstack/react-query';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { ProtectedError } from '../layouts/ProtectedLayout/ProtectedError';
import { ProtectedLayout } from '../layouts/ProtectedLayout/ProtectedLayout';
import { ProtectedLayoutSkeleton } from '../layouts/ProtectedLayout/ProtectedLayoutSkeleton';
import type { AllRoutes } from '../router/router.types';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
  pendingComponent: ProtectedLayoutSkeleton,
  errorComponent: ProtectedError,
  beforeLoad: ({
    context: {
      auth: { userId },
      userService,
    },
    location,
  }) => {
    if (!userId) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as AllRoutes,
          isLogout: undefined,
        },
      });
    }

    return {
      auth: { userId },
      getUserByIdQueryOptions: queryOptions({
        queryKey: ['user', { userId }],
        queryFn: () => userService().getUserById(userId),
      }),
    };
  },
  loader: async ({ context: { queryClient, getUserByIdQueryOptions } }) => {
    await queryClient.ensureQueryData(getUserByIdQueryOptions);
  },
});
