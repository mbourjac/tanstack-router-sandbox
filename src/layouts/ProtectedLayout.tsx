import { Outlet } from '@tanstack/react-router';
import { useAuthService } from '../services/auth/auth.service';

export const ProtectedLayout = () => {
  const {
    auth: { role },
  } = useAuthService();

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="border-main p-4 text-xl font-extrabold tracking-wider">
        {`Hello ${role}`}
      </p>
      <Outlet />
    </div>
  );
};
