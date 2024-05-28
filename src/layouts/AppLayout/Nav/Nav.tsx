import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Bulleted } from '../../../components/ui/Bulleted';
import { useAuthStore } from '../../../services/auth/auth.store';
import { NavLink } from './NavLink';

export const Nav = () => {
  const navigate = useNavigate();
  const isLoading = useRouterState({
    select: (state) => state.isLoading,
  });

  const { isLoggedIn } = useAuthStore((state) => state.auth);
  const logout = useAuthStore((state) => state.logout);

  const isLoggedInNav = isLoggedIn && !isLoading;

  const handleLogout = async () => {
    logout();
    await navigate({ to: '/login' });
  };

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
          <button onClick={() => void handleLogout()}>
            <Bulleted>Logout</Bulleted>
          </button>
        : <NavLink to="/login" isLoading={isLoading}>
            Login
          </NavLink>
        }
      </div>
    </nav>
  );
};
