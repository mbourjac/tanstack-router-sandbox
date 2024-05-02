import { createRouteMask } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const newsMask = createRouteMask({
  routeTree,
  from: '/dashboard/news',
  to: '/dashboard',
});

export const routeMasks = [newsMask];
