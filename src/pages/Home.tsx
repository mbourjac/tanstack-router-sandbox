import { Navigate } from '@tanstack/react-router';
import { useAuthStore } from '../services/auth/auth.store';

export const Home = () => {
  const { isLoggedIn } = useAuthStore.use.auth();

  return <Navigate to={isLoggedIn ? '/dashboard' : '/login'} />;
};
