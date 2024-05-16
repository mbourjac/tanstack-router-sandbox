import { createRouteMask } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import type { AllRoutes } from './router.types';

type CreateRouteMasks = {
  routeTree: typeof routeTree;
  masks: { from: AllRoutes; to: AllRoutes }[];
};

const createRouteMasks = ({ routeTree, masks }: CreateRouteMasks) =>
  masks.map((mask) =>
    createRouteMask({
      routeTree,
      ...mask,
    }),
  );

export const routeMasks = createRouteMasks({
  routeTree,
  masks: [
    {
      // masks search params
      from: '/login',
      to: '/login',
    },
    {
      from: '/dashboard/news',
      to: '/dashboard',
    },
  ],
});
