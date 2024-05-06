import { Link, useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '../../services/auth/auth.store';

export const Nav = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore((state) => state.auth);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    logout();
    await navigate({ to: '/login' });
  };

  return (
    <nav className="flex items-center gap-12">
      {isLoggedIn && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </>
      )}
      <Link to="/about">About</Link>
      {isLoggedIn ?
        <button
          className="bg-black px-4 py-2 text-white"
          onClick={() => void handleLogout()}
        >
          Log out
        </button>
      : <Link to="/" className="bg-black px-4 py-2 text-white">
          Login
        </Link>
      }
    </nav>
  );
};
