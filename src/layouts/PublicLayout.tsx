import { Outlet } from '@tanstack/react-router';

export const PublicLayout = () => {
  return (
    <div
      className="border-main flex overflow-hidden"
      style={{ height: `calc(100vh - 7.75rem)` }}
    >
      <Outlet />
    </div>
  );
};
