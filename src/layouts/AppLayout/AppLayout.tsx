import { useEffect, useState } from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { Icon } from '../../components/ui/Icon';
import { useDevice } from '../../hooks/use-device';
import { Nav } from './Nav/Nav';
import { CustomToaster } from './Toaster/CustomToaster';

export const AppLayout = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);
  const { isMediumDevice } = useDevice();

  const handleToggleMenu = () => {
    setIsNavDisplayed((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    setIsNavDisplayed(!isMediumDevice);
  }, [isMediumDevice]);

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
                className="px-4 py-3 lg:hidden"
              >
                <Icon
                  kind="menu"
                  className="size-8"
                  screenReaderLabel={`${
                    isNavDisplayed ? 'Close' : 'Open'
                  } menu`}
                />
              </button>
            </div>
            <Nav isDisplayed={isNavDisplayed} isMobile={isMediumDevice} />
          </header>
          <div className="h-4"></div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
