import { createRouter } from '@tanstack/react-router';
import { routerContext } from './router.context';
import { routeMasks } from './router.masks';
import { routeTree } from './routeTree.gen';

export const router = createRouter({
  routeTree,
  context: routerContext,
  routeMasks,
  defaultPendingMs: Infinity,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
