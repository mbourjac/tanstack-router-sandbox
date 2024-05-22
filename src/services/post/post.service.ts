import type { User } from '../user/user.types';
import { getAllPostsRequest } from './post.api';
import { allPostsSchema } from './post.schemas';

export const postService = () => {
  const getAllPosts = async (userId: User['id']) => {
    const data = await getAllPostsRequest(userId);
    return allPostsSchema.parse(data);
  };

  return { getAllPosts };
};
