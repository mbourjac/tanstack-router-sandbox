import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Input } from '../components/form/Input';
import { useZodForm } from '../hooks/use-zod-form';
import { Route } from '../routes/_public/login';
import { loginUserSchema } from '../services/auth/auth.schemas';
import { useAuthStore } from '../services/auth/auth.store';
import type { LoginUser } from '../services/auth/auth.types';

export const Login = () => {
  const navigate = useNavigate({ from: '/login' });
  const { redirect } = Route.useSearch();

  const { isLoggedIn } = useAuthStore((state) => state.auth);
  const login = useAuthStore((state) => state.login);

  const {
    handleSubmit,
    inputProps,
    formState: { isSubmitting },
  } = useZodForm(loginUserSchema);

  const onSubmit = async (data: LoginUser) => {
    await login(data);
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    const redirectUser = async () => {
      if (!redirect || redirect === '/dashboard') {
        await navigate({
          to: '/dashboard/news',
        });
      } else {
        await navigate({
          to: redirect,
        });
      }
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
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
