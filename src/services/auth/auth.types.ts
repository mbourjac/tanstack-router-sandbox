import type { z } from 'zod';
import type { Nullable } from '../../helpers/types';
import type { authDataSchema, loginUserSchema } from './auth.schemas';

export type LoginUser = z.infer<typeof loginUserSchema>;

type AuthData = z.infer<typeof authDataSchema>;

export type Auth =
  | ({ isLoggedIn: true } & AuthData)
  | ({ isLoggedIn: false } & Nullable<AuthData>);
