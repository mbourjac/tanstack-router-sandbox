import { z } from 'zod';
import { userSchema } from '../user/user.schemas';

export const loginUserSchema = z.object({
  email: z.string().trim().min(1, { message: 'This field is required' }),
  password: z.string(),
});

export const authSchema = z.object({
  user: userSchema,
  token: z.string(),
});
