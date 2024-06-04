import { Outlet } from '@tanstack/react-router';
import { DashboardNav } from './DashboardNav/DashboardNav';

export const DashboardLayout = () => {
  return (
    <div className="flex grow flex-col md:flex-row md:gap-4">
      <DashboardNav />
      <Outlet />
    </div>
  );
};
