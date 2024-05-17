import { queryOptions } from '@tanstack/react-query';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { ProtectedError } from '../layouts/ProtectedLayout/ProtectedError';
import { ProtectedLayout } from '../layouts/ProtectedLayout/ProtectedLayout';
import type { AllRoutes } from '../router/router.types';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ProtectedError,

  beforeLoad: ({
    context: {
      userService,
      auth: { userId, token },
    },
    location,
  }) => {
    if (!userId || !token) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as AllRoutes,
        },
      });
    }

    return {
      getUserByIdQueryOptions: queryOptions({
        queryKey: ['user', { userId }],
        queryFn: () => userService().getUserById(userId),
      }),
    };
  },

  loader: ({ context: { queryClient, getUserByIdQueryOptions } }) => {
    void queryClient.ensureQueryData(getUserByIdQueryOptions);
  },
});
