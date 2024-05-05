import type { z } from 'zod';
import type { Nullable } from '../../helpers/types';
import type { loginUserSchema } from './auth.schemas';

export type LoginUser = z.infer<typeof loginUserSchema>;

type AuthData = {
  userId: number;
  token: string;
  role: 'admin' | 'user';
};

export type Auth =
  | ({ isLoggedIn: true } & AuthData)
  | ({ isLoggedIn: false } & Nullable<AuthData>);
