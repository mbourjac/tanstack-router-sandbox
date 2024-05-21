import { useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { useAuthStore } from '../services/auth/auth.store';
import { router } from './router.instance';

export const Router = () => {
  const queryClient = useQueryClient();
  const auth = useAuthStore((state) => state.auth);

  return <RouterProvider router={router} context={{ auth, queryClient }} />;
};
