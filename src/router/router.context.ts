import type { QueryClient } from '@tanstack/react-query';
import type { Auth } from '../services/auth/auth.types';
import { postService } from '../services/post/post.service';
import { userService } from '../services/user/user.service';

export type RouterContext = {
  queryClient: QueryClient;
  auth: Auth;
  userService: typeof userService;
  postService: typeof postService;
};

export const routerContext: RouterContext = {
  queryClient: undefined!,
  auth: undefined!,
  userService,
  postService: postService,
};
