import { queryOptions } from '@tanstack/react-query';
import type { User } from '../user/user.types';
import { getAllPostsRequest } from './post.api';
import { allPostsSchema } from './post.schemas';

export const usePostService = () => {
  const getAllPostsQueryOptions = (userId: User['id']) =>
    queryOptions({
      queryKey: ['posts', 'user', { userId }],
      queryFn: async () => {
        const data = await getAllPostsRequest(userId);
        return allPostsSchema.parse(data);
      },
    });

  return { getAllPostsQueryOptions };
};
