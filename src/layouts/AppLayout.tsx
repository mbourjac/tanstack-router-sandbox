import { Outlet } from '@tanstack/react-router';
import { Nav } from '../components/Nav';

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col text-xl font-bold">
      <Nav />
      <div className="flex flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};
