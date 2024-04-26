import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { useAuthService } from './services/auth/auth.service';

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const Router = () => {
  const { auth } = useAuthService();

  return <RouterProvider router={router} context={{ auth }} />;
};
