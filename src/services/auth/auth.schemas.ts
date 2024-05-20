import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().trim().min(1, { message: 'This field is required' }),
  password: z.string(),
});

export const authDataSchema = z.object({
  userId: z.number(),
  token: z.string(),
  role: z.union([z.literal('user'), z.literal('admin')]),
});
