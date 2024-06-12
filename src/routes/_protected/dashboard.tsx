import { createFileRoute } from '@tanstack/react-router';
import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout';

export const Route = createFileRoute('/_protected/dashboard')({
  component: DashboardLayout,
  beforeLoad: ({
    context: {
      auth: { user },
      postService,
    },
  }) => {
    return {
      getAllPostsQuery: postService.getAllPostsQueryOptions(user.id),
    };
  },
  loader: async ({ context: { queryClient, getAllPostsQuery } }) => {
    await queryClient.ensureQueryData(getAllPostsQuery);
  },
});
