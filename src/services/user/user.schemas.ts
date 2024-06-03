import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  username: z.string(),
});

export const registerUserSchema = z.object({
  username: z.string().trim().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Please provide a valid email' }),
  phone: z.union([
    z
      .string()
      .trim()
      .regex(
        /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gi,
        'Please provide a valid phone number',
      ),
    z.literal(''),
  ]),
  location: z.string().trim().min(1, { message: 'This field is required' }),
  consent: z.literal<boolean>(true, {
    errorMap: () => ({
      message: 'Please accept the terms and conditions',
    }),
  }),
});
