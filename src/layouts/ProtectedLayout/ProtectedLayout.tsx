import { Outlet, useRouteContext } from '@tanstack/react-router';
import { Typewriter } from '../../components/ui/Typewriter';

export const ProtectedLayout = () => {
  const { user } = useRouteContext({
    from: '/_protected',
    select: (context) => context.auth,
  });

  return (
    <div className="flex w-full grow flex-col">
      <p className="border-main relative z-10 bg-white p-4 text-xl font-extrabold tracking-wider">
        Hello <Typewriter text={user.username} />
      </p>
      <Outlet />
    </div>
  );
};
