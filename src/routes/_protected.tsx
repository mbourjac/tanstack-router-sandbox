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
      postService,
    },
    location,
  }) => {
    if (!userId) {
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
      getAllPostsQueryOptions: queryOptions({
        queryKey: ['posts', 'user', { userId }],
        queryFn: () => postService().getAllPosts(userId),
      }),
    };
  },
  loader: async ({
    context: { queryClient, getUserByIdQueryOptions, getAllPostsQueryOptions },
  }) => {
    await queryClient.ensureQueryData(getUserByIdQueryOptions);
    await queryClient.ensureQueryData(getAllPostsQueryOptions);
  },
});
