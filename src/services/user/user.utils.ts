import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';

export const useEnsuredUser = () => {
  const getUserByIdQueryOptions = useRouteContext({
    from: '/_protected',
    select: (context) => context.getUserByIdQueryOptions,
  });
  const { data } = useSuspenseQuery(getUserByIdQueryOptions);

  return data;
};
