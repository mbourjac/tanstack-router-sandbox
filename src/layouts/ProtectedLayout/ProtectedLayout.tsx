import { Outlet } from '@tanstack/react-router';
import { Typewriter } from '../../components/ui/Typewriter';
import { useEnsuredUser } from '../../services/user/user.utils';

export const ProtectedLayout = () => {
  const { username } = useEnsuredUser();

  return (
    <div className="flex w-full flex-col">
      <p className="border-main relative z-10 bg-white p-4 text-xl font-extrabold tracking-wider">
        Hello <Typewriter text={username} />
      </p>
      <Outlet />
    </div>
  );
};
