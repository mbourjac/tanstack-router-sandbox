import { Outlet } from '@tanstack/react-router';

export const PublicLayout = () => {
  return (
    <div className="border-main flex w-full p-4">
      <Outlet />
    </div>
  );
};
