import { RouterProvider } from '@tanstack/react-router';
import { useAuthService } from '../services/auth/auth.service';
import { router } from './router.instance';

export const Router = () => {
  const { auth } = useAuthService();

  return <RouterProvider router={router} context={{ auth }} />;
};
