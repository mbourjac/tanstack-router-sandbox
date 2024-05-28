import { useEffect } from 'react';
import { useRouterState, Navigate } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../helpers/errors';
import type { AllRoutes } from '../../router/router.types';

type ProtectedErrorProp = {
  error: unknown;
};

export const ProtectedError = ({ error }: ProtectedErrorProp) => {
  const location = useRouterState({
    select: (state) => state.location,
  });

  useEffect(() => {
    toast(getErrorMessage(error), { id: 'protected-route-error' });
  }, [error]);

  return (
    <Navigate
      to="/login"
      search={{
        redirect: location.href as AllRoutes,
      }}
    />
  );
};
