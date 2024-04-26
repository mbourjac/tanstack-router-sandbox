import { useNavigate } from '@tanstack/react-router';
import { Input } from '../components/Input';
import { useZodForm } from '../hooks/use-zod-form';
import { loginUserSchema } from '../services/auth/auth.schemas';
import { useAuthService } from '../services/auth/auth.service';
import type { LoginUser } from '../services/auth/auth.types';

export const Login = () => {
  const navigate = useNavigate({ from: '/login' });
  const {
    login,
    auth: { isLoggedIn },
  } = useAuthService();
  const {
    handleSubmit,
    inputProps,
    formState: { isSubmitting },
  } = useZodForm(loginUserSchema);

  const onSubmit = async (data: LoginUser) => {
    await login(data);
    await navigate({ to: '/dashboard' });
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-[min(30rem,100%)] gap-8">
        {isLoggedIn ?
          <p className="w-full text-center">You&apos;re already logged in.</p>
        : <form
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
              className="w-fit bg-black px-4 py-2 text-xl font-bold text-white disabled:bg-slate-400"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        }
      </div>
    </div>
  );
};
