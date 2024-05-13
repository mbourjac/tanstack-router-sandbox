import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '../../../services/auth/auth.store';
import { NavLink } from './NavLink';

export const Nav = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore((state) => state.auth);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    logout();
    await navigate({ to: '/login' });
  };

  return (
    <nav className="flex items-center gap-12" aria-label="Main menu">
      {isLoggedIn && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}
      <NavLink to="/about">About</NavLink>
      {isLoggedIn ?
        <button
          className="bg-black px-4 py-2 text-white hover:text-primary"
          onClick={() => void handleLogout()}
        >
          Log out
        </button>
      : <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};
