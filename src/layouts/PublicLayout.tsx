import { Outlet } from '@tanstack/react-router';

export const PublicLayout = () => {
  return (
    <div className="flex w-full border-8 border-black p-4">
      <Outlet />
    </div>
  );
};
