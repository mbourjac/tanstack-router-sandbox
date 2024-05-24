import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';

export const useEnsuredPosts = () => {
  const getAllPostsQueryOptions = useRouteContext({
    from: '/_protected/dashboard/',
    select: (context) => context.getAllPostsQueryOptions,
  });
  const { data } = useSuspenseQuery(getAllPostsQueryOptions);

  return data;
};
