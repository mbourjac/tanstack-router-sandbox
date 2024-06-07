import { useContentHeight } from '../hooks/use-content-height';

export const Profile = () => {
  const height = useContentHeight('protected');

  return (
    <div
      className="border-main my-4 flex"
      style={{
        height,
      }}
    >
      <div className="overflow-auto p-4">
        <h2>Hello /_protected/profile!</h2>
      </div>
    </div>
  );
};
