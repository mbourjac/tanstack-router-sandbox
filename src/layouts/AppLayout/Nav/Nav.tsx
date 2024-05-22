import { useRouterState } from '@tanstack/react-router';
import { useAuthStore } from '../../../services/auth/auth.store';
import { NavLink } from './NavLink';

export const Nav = () => {
  const isLoading = useRouterState({
    select: (state) => state.isLoading,
  });
  const { isLoggedIn } = useAuthStore((state) => state.auth);

  const isLoggedInNav = isLoggedIn && !isLoading;

  return (
    <nav className="flex items-center gap-12" aria-label="Main menu">
      {isLoggedInNav && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}
      <NavLink to="/about">About</NavLink>
      <div>
        {isLoggedInNav ?
          <NavLink to="/login" search={{ isLogout: true, redirect: undefined }}>
            Logout
          </NavLink>
        : <NavLink to="/login" isLoading={isLoading}>
            Login
          </NavLink>
        }
      </div>
    </nav>
  );
};
