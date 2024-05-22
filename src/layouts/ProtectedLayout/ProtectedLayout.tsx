import { Outlet } from '@tanstack/react-router';
import { Sticky } from '../../components/ui/Sticky';
import { useEnsuredUser } from '../../services/user/user.utils';

export const ProtectedLayout = () => {
  const user = useEnsuredUser();

  return (
    <div className="flex w-full flex-col gap-4">
      <Sticky>
        <p className="border-main relative z-10 bg-white p-4 text-xl font-extrabold tracking-wider">
          Hello {user.username}
        </p>
      </Sticky>
      <Outlet />
    </div>
  );
};
