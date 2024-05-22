import { Link, Outlet } from '@tanstack/react-router';
import { Nav } from './Nav/Nav';
import { CustomToaster } from './Toaster/CustomToaster';

export const AppLayout = () => {
  return (
    <>
      <CustomToaster />
      <div className="flex min-h-screen flex-col px-4 text-xl font-bold">
        <div className="sticky top-0 z-10 bg-white">
          <header className="border-main mt-4 flex items-center justify-between p-4">
            <Link to="/">
              <h1 className="text-xl font-black uppercase tracking-[0.2rem]">
                Lorem Ipsum
              </h1>
            </Link>
            <Nav />
          </header>
          <div className="h-4"></div>
        </div>
        <div className="mb-4 flex flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};
