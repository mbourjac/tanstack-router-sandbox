import { useEnsuredPosts } from '../../services/post/post.utils';
import { PostCard } from './PostCard';

export const Dashboard = () => {
  const posts = useEnsuredPosts();

  return (
    <div className="grid h-[calc(100vh-11.5rem)] grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4 overflow-auto py-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
