import { useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { useAuthStore } from '../services/auth/auth.store';
import { usePostService } from '../services/post/post.service';
import { router } from './router.instance';

export const Router = () => {
  const queryClient = useQueryClient();
  const auth = useAuthStore.use.auth();
  const postService = usePostService();

  return (
    <RouterProvider
      router={router}
      context={{ queryClient, auth, postService }}
    />
  );
};
