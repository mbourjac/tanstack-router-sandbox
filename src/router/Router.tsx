import { RouterProvider } from '@tanstack/react-router';
import { useAuthStore } from '../services/auth/auth.store';
import { router } from './router.instance';

export const Router = () => {
  const auth = useAuthStore((state) => state.auth);

  return <RouterProvider router={router} context={{ auth }} />;
};
