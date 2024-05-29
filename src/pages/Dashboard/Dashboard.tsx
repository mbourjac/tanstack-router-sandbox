import { useIsMobile } from '../../hooks/use-is-mobile';
import { useMobileNavHeight } from '../../hooks/use-mobile-nav-height';
import { useEnsuredPosts } from '../../services/post/post.utils';
import { PostCard } from './PostCard';

export const Dashboard = () => {
  const posts = useEnsuredPosts();
  const isMobile = useIsMobile();
  const { mobileNavHeight } = useMobileNavHeight();

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4 overflow-auto py-4"
      style={{
        height: `calc(100vh - 11.5rem - ${
          isMobile ? mobileNavHeight / 16 : 0
        }rem)`,
      }}
    >
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
