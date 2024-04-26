import type { z } from 'zod';
import type { loginUserSchema } from './auth.schemas';

export type LoginUser = z.infer<typeof loginUserSchema>;

export type AuthRole = 'admin' | 'user';

export type Auth =
  | { isLoggedIn: true; role: AuthRole }
  | { isLoggedIn: false; role: null };
