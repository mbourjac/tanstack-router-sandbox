import { useEffect, useState } from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { MenuIcon } from '../../components/icons/MenuIcon';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { Nav } from './Nav/Nav';
import { CustomToaster } from './Toaster/CustomToaster';

export const AppLayout = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);
  const isMobile = useIsMobile();

  const handleToggleMenu = () => {
    setIsNavDisplayed((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    setIsNavDisplayed(!isMobile);
  }, [isMobile]);

  return (
    <>
      <CustomToaster />
      <div className="flex h-screen flex-col overflow-hidden px-4 text-xl font-bold">
        <div className="sticky top-0 z-10 bg-white">
          <header className="border-main mt-4 flex flex-col items-center justify-between lg:flex-row">
            <div className="flex w-full items-center justify-between">
              <Link to="/">
                <h1 className="p-4 text-xl font-black uppercase tracking-[0.2rem]">
                  Lorem Ipsum
                </h1>
              </Link>
              <button
                onClick={handleToggleMenu}
                className="p-[0.125rem] lg:hidden"
              >
                <MenuIcon />
                <span className="sr-only">{`${
                  isNavDisplayed ? 'Close' : 'Open'
                } menu`}</span>
              </button>
            </div>
            <Nav isDisplayed={isNavDisplayed} isMobile={isMobile} />
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
