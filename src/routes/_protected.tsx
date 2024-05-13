import { queryOptions } from '@tanstack/react-query';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { ProtectedError } from '../components/app/ProtectedError';
import { ProtectedLayout } from '../layouts/ProtectedLayout';
import type { AllRoutes } from '../router/router.types';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ProtectedError,

  beforeLoad: ({
    context: {
      baseAPI,
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

    baseAPI.defaults.headers.Authorization = `Bearer ${token}`;

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
