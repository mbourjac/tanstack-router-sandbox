import { Navigate } from '@tanstack/react-router';
import { useAuthService } from '../services/auth/auth.service';

export const Home = () => {
  const {
    auth: { isLoggedIn },
  } = useAuthService();

  return <Navigate to={isLoggedIn ? '/dashboard' : '/login'} />;
};
