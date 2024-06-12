import type { QueryClient } from '@tanstack/react-query';
import type { Auth } from '../services/auth/auth.types';
import { postService } from '../services/post/post.service';

export type RouterContext = {
  queryClient: QueryClient;
  auth: Auth | null;
  postService: typeof postService;
};

export const routerContext: RouterContext = {
  queryClient: undefined!,
  auth: undefined!,
  postService,
};
