import type { z } from 'zod';
import type { postSchema } from './post.schemas';

export type Post = z.infer<typeof postSchema>;
