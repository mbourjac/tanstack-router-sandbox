import { useFixedBody } from '../../hooks/use-fixed-body';

export const DashboardSkeleton = () => {
  useFixedBody();

  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="animate-skeleton h-[14.25rem] w-[23.75rem] grow bg-black"
        ></div>
      ))}
    </div>
  );
};
