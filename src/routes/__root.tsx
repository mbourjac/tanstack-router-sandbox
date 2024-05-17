import { createRootRouteWithContext } from '@tanstack/react-router';
import { AppLayout } from '../layouts/AppLayout/AppLayout';
import type { RouterContext } from '../router/router.context';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: AppLayout,
});
