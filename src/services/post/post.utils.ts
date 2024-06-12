import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';

export const useCachedPosts = () => {
  const getAllPostsQuery = useRouteContext({
    from: '/_protected/dashboard',
    select: (context) => context.getAllPostsQuery,
  });
  const { data } = useSuspenseQuery(getAllPostsQuery);

  return data;
};
