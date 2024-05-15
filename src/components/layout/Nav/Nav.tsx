import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '../../../services/auth/auth.store';
import { Bulleted } from '../../ui/Bulleted';
import { NavLink } from './NavLink';

export const Nav = () => {
  const { isLoggedIn } = useAuthStore((state) => state.auth);
  const navigate = useNavigate();
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
      <div>
        {isLoggedIn ?
          <button onClick={() => void handleLogout()}>
            <Bulleted>Logout</Bulleted>
          </button>
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
};
