import { z } from 'zod';

export const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const allPostsSchema = z.array(postSchema);
