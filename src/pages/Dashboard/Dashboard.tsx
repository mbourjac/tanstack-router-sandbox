import { useContentHeight } from '../../hooks/use-content-height';
import { useCachedPosts } from '../../services/post/post.utils';
import { PostCard } from './PostCard';

export const Dashboard = () => {
  const posts = useCachedPosts();
  const height = useContentHeight('scrollDashboard');

  return (
    <div className="w-full @container">
      <div
        className="grid grid-cols-1 gap-4 overflow-auto py-4 @[380px]:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]"
        style={{
          height,
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
