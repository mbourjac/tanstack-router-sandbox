import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  username: z.string(),
});