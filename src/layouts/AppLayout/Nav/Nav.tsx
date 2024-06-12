import { useEffect, useRef } from 'react';
import {
  useMatches,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router';
import { Bulleted } from '../../../components/ui/Bulleted';
import { useMobileNavHeight } from '../../../hooks/use-mobile-nav-height';
import { useAuthStore } from '../../../services/auth/auth.store';
import { NavLink } from './NavLink';

type NavProps = {
  isDisplayed: boolean;
  isMobile: boolean;
};

export const Nav = ({ isDisplayed, isMobile }: NavProps) => {
  const navigate = useNavigate();
  const isLoading = useRouterState({
    select: (state) => state.isLoading,
  });

  const auth = useAuthStore.use.auth();
  const logout = useAuthStore.use.logout();

  const isLogin = !!useMatches().find(({ pathname }) => pathname === '/login');
  // prevent displaying protected nav once logged in but while still loading dashboard
  const isProtectedNav = auth && !isLogin;

  const handleLogout = async () => {
    logout();
    await navigate({ to: '/login' });
  };

  const { setMobileNavHeight } = useMobileNavHeight();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMobile) return;

    if (isDisplayed) {
      const nav = navRef.current;

      if (!nav) return;

      const { height } = nav.getBoundingClientRect();
      setMobileNavHeight(height);
    } else {
      setMobileNavHeight(0);
    }
  }, [isDisplayed, isMobile, setMobileNavHeight]);

  return (
    isDisplayed && (
      <nav
        className="flex w-full flex-col items-start gap-4 border-t-8 border-black p-4 lg:w-fit lg:flex-row lg:items-center lg:gap-12 lg:border-t-0"
        aria-label="Main menu"
        ref={navRef}
      >
        {isProtectedNav && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </>
        )}
        <NavLink to="/about">About</NavLink>
        {isProtectedNav ?
          <button onClick={() => void handleLogout()}>
            <Bulleted>Logout</Bulleted>
          </button>
        : <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login" isLoading={isLoading}>
              Login
            </NavLink>
          </>
        }
      </nav>
    )
  );
};
