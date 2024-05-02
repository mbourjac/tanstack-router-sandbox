import { createRootRouteWithContext } from '@tanstack/react-router';
import { AppLayout } from '../../layouts/AppLayout';
import type { RouterContext } from '../router.context';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: AppLayout,
});
