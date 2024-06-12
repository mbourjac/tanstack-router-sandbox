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
  beforeLoad: ({ context: { auth, postService }, location }) => {
    if (!auth) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as AllRoutes,
        },
      });
    }

    const { user } = auth;

    return {
      auth,
      getAllPostsQueryOptions: queryOptions({
        queryKey: ['posts', 'user', { userId: user.id }],
        queryFn: () => postService().getAllPosts(user.id),
      }),
    };
  },
  loader: async ({ context: { queryClient, getAllPostsQueryOptions } }) => {
    await queryClient.ensureQueryData(getAllPostsQueryOptions);
  },
});
