import { useDevice } from '../../hooks/use-device';
import { useMobileNavHeight } from '../../hooks/use-mobile-nav-height';
import { useEnsuredPosts } from '../../services/post/post.utils';
import { PostCard } from './PostCard';

export const Dashboard = () => {
  const { isSmallDevice, isMediumDevice } = useDevice();
  const { mobileNavHeight } = useMobileNavHeight();
  const posts = useEnsuredPosts();

  return (
    <div className="w-full @container">
      <div
        className="grid grid-cols-1 gap-4 overflow-auto py-4 @[380px]:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]"
        style={{
          height: `calc(100vh - 11.5rem - ${isSmallDevice ? 5.75 : 0}rem - ${
            isMediumDevice ? mobileNavHeight / 16 : 0
          }rem)`,
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
