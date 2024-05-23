import { useEffect } from 'react';
import { getRouteApi, useRouterState } from '@tanstack/react-router';
import { Input } from '../components/forms/Input';
import { useZodForm } from '../hooks/use-zod-form';
import { loginUserSchema } from '../services/auth/auth.schemas';
import { useAuthStore } from '../services/auth/auth.store';
import type { LoginUser } from '../services/auth/auth.types';

const route = getRouteApi('/_public/login');

export const Login = () => {
  const navigate = route.useNavigate();
  const { redirect, isLogout } = route.useSearch();
  const isLoading = useRouterState({
    select: (state) => state.isLoading,
  });

  const { isLoggedIn } = useAuthStore((state) => state.auth);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const {
    handleSubmit,
    inputProps,
    formState: { isSubmitting },
  } = useZodForm(loginUserSchema);

  const onSubmit = async (data: LoginUser) => {
    await login(data);
  };

  useEffect(() => {
    if (isLogout) logout();
  }, [isLogout, logout]);

  useEffect(() => {
    const redirectUser = async () => {
      await navigate({
        to: isLoggedIn ? redirect ?? '/dashboard' : '/login',
      });
    };

    void redirectUser();
  }, [isLoggedIn, navigate, redirect]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-[min(30rem,100%)] gap-8">
        <form
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className="flex w-full flex-col items-center gap-8"
        >
          <Input id="email" label="Email*" {...inputProps} />
          <Input
            type="password"
            id="password"
            label="Password"
            {...inputProps}
          />
          <button
            className="w-fit bg-black px-4 py-2 text-xl text-white disabled:bg-slate-400"
            disabled={isSubmitting || isLoading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
