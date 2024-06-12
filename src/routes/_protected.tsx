import { queryOptions } from '@tanstack/react-query';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { ProtectedLayout } from '../layouts/ProtectedLayout/ProtectedLayout';
import { ProtectedLayoutError } from '../layouts/ProtectedLayout/ProtectedLayoutError';
import { ProtectedLayoutSkeleton } from '../layouts/ProtectedLayout/ProtectedLayoutSkeleton';
import type { AllRoutes } from '../router/router.types';

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
  pendingComponent: ProtectedLayoutSkeleton,
  errorComponent: ProtectedLayoutError,
  beforeLoad: ({ context: { baseAPI, auth, postService }, location }) => {
    if (!auth) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as AllRoutes,
        },
      });
    }

    const { user, token } = auth;

    baseAPI.defaults.headers.Authorization = `Bearer ${token}`;

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
