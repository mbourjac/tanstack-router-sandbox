import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { routerContext } from './router.context';
import { routeMasks } from './router.masks';

export const router = createRouter({
  routeTree,
  context: routerContext,
  routeMasks,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
