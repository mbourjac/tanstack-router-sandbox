import { Link, Outlet } from '@tanstack/react-router';
import { Nav } from './Nav/Nav';
import { CustomToaster } from './Toaster/CustomToaster';

export const AppLayout = () => {
  return (
    <>
      <CustomToaster />
      <div className="flex min-h-screen flex-col gap-4 p-4 text-xl font-bold">
        <header className="border-main flex items-center justify-between p-4">
          <Link to="/">
            <h1 className="text-xl font-black uppercase tracking-[0.2rem]">
              Lorem Ipsum
            </h1>
          </Link>
          <Nav />
        </header>
        <div className="flex flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};
