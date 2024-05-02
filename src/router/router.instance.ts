import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { routerContext } from './router.context';

export const router = createRouter({
  routeTree,
  context: routerContext,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
