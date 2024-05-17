import { useSuspenseQuery } from '@tanstack/react-query';
import { Outlet, useRouteContext } from '@tanstack/react-router';

export const ProtectedLayout = () => {
  const { getUserByIdQueryOptions } = useRouteContext({ from: '/_protected' });
  const { data: user } = useSuspenseQuery(getUserByIdQueryOptions);

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="border-main p-4 text-xl font-extrabold tracking-wider">
        Hello {user.username}
      </p>
      <Outlet />
    </div>
  );
};
