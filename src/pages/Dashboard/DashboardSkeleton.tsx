export const DashboardSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="mt-4 h-[14.25rem] w-[23.75rem] grow animate-skeleton bg-black"
        ></div>
      ))}
    </div>
  );
};
