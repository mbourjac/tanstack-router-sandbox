import { Navigate } from '@tanstack/react-router';
import { useAuthStore } from '../services/auth/auth.store';

export const Home = () => {
  const auth = useAuthStore.use.auth();

  return <Navigate to={auth ? '/dashboard' : '/login'} />;
};
