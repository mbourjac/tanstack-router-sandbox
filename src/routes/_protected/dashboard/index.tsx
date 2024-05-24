import { queryOptions } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '../../../pages/Dashboard/Dashboard';
import { DashboardSkeleton } from '../../../pages/Dashboard/DashboardSkeleton';

export const Route = createFileRoute('/_protected/dashboard/')({
  component: Dashboard,
  pendingComponent: DashboardSkeleton,
  beforeLoad: ({
    context: {
      auth: { userId },
      postService,
    },
  }) => {
    return {
      getAllPostsQueryOptions: queryOptions({
        queryKey: ['posts', 'user', { userId }],
        queryFn: () => postService().getAllPosts(userId),
      }),
    };
  },
  loader: async ({ context: { queryClient, getAllPostsQueryOptions } }) => {
    await queryClient.ensureQueryData(getAllPostsQueryOptions);
  },
});
