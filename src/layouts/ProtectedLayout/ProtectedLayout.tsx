import { Outlet } from '@tanstack/react-router';
import { useEnsuredUser } from '../../services/user/user.utils';

export const ProtectedLayout = () => {
  const user = useEnsuredUser();

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="border-main p-4 text-xl font-extrabold tracking-wider">
        Hello {user.username}
      </p>
      <Outlet />
    </div>
  );
};
