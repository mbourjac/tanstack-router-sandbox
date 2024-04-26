import { Link, useNavigate } from '@tanstack/react-router';
import { useAuthService } from '../services/auth/auth.service';

export const Nav = () => {
  const navigate = useNavigate();
  const {
    auth: { isLoggedIn },
    logout,
  } = useAuthService();

  const handleLogout = async () => {
    logout();
    await navigate({ to: '/login' });
  };

  return (
    <nav className="flex items-center justify-end gap-12 p-4">
      {isLoggedIn ?
        <Link to="/dashboard">Dashboard</Link>
      : <Link to="/">Login</Link>}
      <Link to="/about">About</Link>
      {isLoggedIn && (
        <button
          className="w-fit justify-self-end bg-black px-4 py-2 text-white"
          onClick={() => void handleLogout()}
        >
          Log out
        </button>
      )}
    </nav>
  );
};
