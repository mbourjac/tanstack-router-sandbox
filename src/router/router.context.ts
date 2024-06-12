import type { QueryClient } from '@tanstack/react-query';
import type { AxiosInstance } from 'axios';
import { baseAPI } from '../lib/axios.instance';
import type { Auth } from '../services/auth/auth.types';
import type { usePostService } from '../services/post/post.service';

export type RouterContext = {
  baseAPI: AxiosInstance;
  queryClient: QueryClient;
  auth: Auth | null;
  postService: ReturnType<typeof usePostService>;
};

export const routerContext: RouterContext = {
  baseAPI,
  queryClient: undefined!,
  auth: undefined!,
  postService: undefined!,
};
