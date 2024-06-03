import type { z } from 'zod';
import type { registerUserSchema, userSchema } from './user.schemas';

export type User = z.infer<typeof userSchema>;

export type RegisterUser = z.infer<typeof registerUserSchema>;
