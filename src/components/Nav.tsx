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
    <nav className="px-4 pt-4">
      <div className="flex items-center justify-end gap-12 border-8 border-black p-4">
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
      </div>
    </nav>
  );
};
