import { useEffect } from 'react';
import { useRouterState, Navigate } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../helpers/errors';
import type { AllRoutes } from '../../router/router.types';
import { useAuthStore } from '../../services/auth/auth.store';

type ProtectedErrorProp = {
  error: unknown;
};

export const ProtectedError = ({ error }: ProtectedErrorProp) => {
  const location = useRouterState({
    select: (state) => state.location,
  });
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    toast(getErrorMessage(error), { id: 'protected-route-error' });
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
