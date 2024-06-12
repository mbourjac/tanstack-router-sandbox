import { useEffect } from 'react';
import { useRouterState, Navigate } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../helpers/errors';
import type { AllRoutes } from '../../router/router.types';
import { useAuthService } from '../../services/auth/auth.service';

type ProtectedLayoutErrorProps = {
  error: unknown;
};

export const ProtectedLayoutError = ({ error }: ProtectedLayoutErrorProps) => {
  const location = useRouterState({
    select: (state) => state.location,
  });
  const { logout } = useAuthService();

  useEffect(() => {
    toast.error(getErrorMessage(error), { id: 'protected-route-error' });
    logout();
  }, [error, logout]);

  return (
    <Navigate
      to="/login"
      search={{
        redirect: location.href as AllRoutes,
      }}
    />
  );
};
