import type { LoginUser } from './auth.types';

export const loginRequest = async ({ password }: LoginUser) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: crypto.randomUUID(),
    token: '',
    role: password ? ('admin' as const) : ('user' as const),
  };
};
