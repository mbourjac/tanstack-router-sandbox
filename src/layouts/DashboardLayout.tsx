import { Outlet } from '@tanstack/react-router';

export const DashboardLayout = () => {
  return (
    <div className="grid h-full grid-cols-[auto_1fr] gap-4">
      <nav className="border-main flex min-w-48 flex-col gap-12 p-4"></nav>
      <div className="border-main">
        <Outlet />
      </div>
    </div>
  );
};
