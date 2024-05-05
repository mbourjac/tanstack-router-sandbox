import type { LoginUser } from './auth.types';

export const loginRequest = async ({ password }: LoginUser) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    userId: Math.floor(Math.random() * 10) + 1,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva',
    role: password ? ('admin' as const) : ('user' as const),
  };
};
