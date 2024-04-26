import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().trim().min(1, { message: 'This field is required' }),
  password: z.string(),
});
