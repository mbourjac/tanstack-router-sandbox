import { Navigate } from '@tanstack/react-router';
import { useAuthStore } from '../services/auth/auth.store';

export const Home = () => {
  const { isLoggedIn } = useAuthStore((state) => state.auth);

  return <Navigate to={isLoggedIn ? '/dashboard' : '/login'} />;
};
