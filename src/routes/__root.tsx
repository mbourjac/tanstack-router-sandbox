import { createRootRouteWithContext } from '@tanstack/react-router';
import { AppLayout } from '../layouts/AppLayout';
import type { Auth } from '../services/auth/auth.types';

interface RouterContext {
  auth: Auth;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: AppLayout,
});
