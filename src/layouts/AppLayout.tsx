import { Link, Outlet } from '@tanstack/react-router';
import { Nav } from '../components/layout/Nav/Nav';

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col text-xl font-bold">
      <header className="px-4 pt-4">
        <div className="border-main flex items-center justify-between p-4">
          <Link to="/">
            <h1 className="text-xl font-black uppercase tracking-[0.2rem]">
              Lorem Ipsum
            </h1>
          </Link>
          <Nav />
        </div>
      </header>
      <div className="flex flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};
