import { createRouter } from '@tanstack/react-router';
import { NotFound } from '../pages/NotFound';
import { routerContext } from './router.context';
import { routeMasks } from './router.masks';
import { routeTree } from './routeTree.gen';

export const router = createRouter({
  routeTree,
  // ensure that the loader is always called when the route is preloaded or visited since React Query is used
  defaultPreloadStaleTime: 0,
  context: routerContext,
  routeMasks,
  defaultNotFoundComponent: NotFound,
  notFoundMode: 'root',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
