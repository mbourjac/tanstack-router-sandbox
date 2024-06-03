import { useEffect } from 'react';
import { getRouteApi, useRouterState } from '@tanstack/react-router';
import { Input } from '../components/forms/Input';
import { Submit } from '../components/forms/Submit';
import { useZodForm } from '../hooks/use-zod-form';
import { loginUserSchema } from '../services/auth/auth.schemas';
import { useAuthStore } from '../services/auth/auth.store';
import type { LoginUser } from '../services/auth/auth.types';

const route = getRouteApi('/_public/login');

export const Login = () => {
  const navigate = route.useNavigate();
  const redirect = route.useSearch({ select: (search) => search.redirect });
  const isLoading = useRouterState({
    select: (state) => state.isLoading,
  });

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

    void navigate({
      to: redirect ?? '/dashboard',
    });
  }, [isLoggedIn, navigate, redirect]);

  return (
    <div className="flex w-full grow items-center justify-center">
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
          <Submit isDisabled={isSubmitting || isLoading} />
        </form>
      </div>
    </div>
  );
};
