import { useAuthStore } from '../../../services/auth/auth.store';
import { NavLink } from './NavLink';

export const Nav = () => {
  const { isLoggedIn } = useAuthStore((state) => state.auth);

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
          <NavLink to="/login" search={{ isLogout: true, redirect: undefined }}>
            Logout
          </NavLink>
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
};
