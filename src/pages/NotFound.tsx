import { useContentHeight } from '../hooks/use-content-height';

export const NotFound = () => {
  const height = useContentHeight('public');

  return (
    <div
      className="border-main flex items-center justify-center"
      style={{
        height,
      }}
    >
      <p>Nothing to see here...</p>
    </div>
  );
};
