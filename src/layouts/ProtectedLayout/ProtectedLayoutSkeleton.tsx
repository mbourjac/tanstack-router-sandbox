import { useRouterState } from '@tanstack/react-router';
import { DashboardSkeleton } from '../../pages/Dashboard/DashboardSkeleton';
import { Profile } from '../../pages/Profile';
import { DashboardNav } from '../DashboardLayout/DashboardNav';

export const ProtectedLayoutSkeleton = () => {
  const location = useRouterState({ select: (state) => state.location });

  return (
    <div className="flex w-full flex-col">
      <p className="border-main relative z-10 bg-white p-4 text-xl font-extrabold tracking-wider">
        Hello |
      </p>
      {location.pathname === '/profile' ?
        <Profile />
      : <div className="flex grow flex-col gap-4 md:flex-row">
          <DashboardNav />
          <DashboardSkeleton />
        </div>
      }
    </div>
  );
};
