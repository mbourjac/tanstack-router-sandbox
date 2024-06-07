import { Outlet } from '@tanstack/react-router';
import { useContentHeight } from '../hooks/use-content-height';

export const PublicLayout = () => {
  const height = useContentHeight('public');

  return (
    <div
      className="border-main flex overflow-hidden"
      style={{
        height,
      }}
    >
      <Outlet />
    </div>
  );
};
