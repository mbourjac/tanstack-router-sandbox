import { useEnsuredPosts } from '../../services/post/post.utils';
import { PostCard } from './PostCard';

export const Dashboard = () => {
  const posts = useEnsuredPosts();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
