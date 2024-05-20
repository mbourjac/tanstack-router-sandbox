import type { z } from 'zod';
import type { userSchema } from './user.schemas';

export type User = z.infer<typeof userSchema>;
