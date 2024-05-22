import type { Post } from '../../services/post/post.types';

type PostCardProps = Pick<Post, 'title' | 'body'>;

export const PostCard = ({ title, body }: PostCardProps) => {
  return (
    <article className="border-main flex flex-col">
      <h3 className="truncate border-b-8 border-black p-4">{title}</h3>
      <div className="p-4">
        <p className="line-clamp-4">{body}</p>
      </div>
    </article>
  );
};
