import type { z } from 'zod';
import type { authSchema, loginUserSchema } from './auth.schemas';

export type LoginUser = z.infer<typeof loginUserSchema>;

export type Auth = z.infer<typeof authSchema>;
