import { useMemo } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { DashboardSkeleton } from '../../pages/Dashboard/DashboardSkeleton';
import { DashboardEvents } from '../../pages/Dashboard/Modals/DashboardEvents';
import { DashboardFeatures } from '../../pages/Dashboard/Modals/DashboardFeatures';
import { DashboardNews } from '../../pages/Dashboard/Modals/DashboardNews';
import { Profile } from '../../pages/Profile';
import { DashboardNav } from '../DashboardLayout/DashboardNav/DashboardNav';

export const ProtectedLayoutSkeleton = () => {
  const { pathname } = useRouterState({ select: (state) => state.location });

  const dashboardMapping = useMemo(
    () => ({
      '/dashboard/news': <DashboardNews />,
      '/dashboard/features': <DashboardFeatures />,
      '/dashboard/events': <DashboardEvents />,
    }),
    [],
  );

  return (
    <div className="flex w-full flex-col">
      <p className="border-main relative z-10 bg-white p-4 text-xl font-extrabold tracking-wider">
        Hello <span className="animate-blinker font-black">|</span>
      </p>
      {pathname === '/profile' ?
        <Profile />
      : <div className="flex grow flex-col gap-4 md:flex-row">
          <DashboardNav />
          {pathname in dashboardMapping ?
            dashboardMapping[pathname as keyof typeof dashboardMapping]
          : <DashboardSkeleton />}
        </div>
      }
    </div>
  );
};
