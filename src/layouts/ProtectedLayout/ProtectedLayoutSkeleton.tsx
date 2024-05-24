import { Sticky } from '../../components/ui/Sticky';
import { useFixedBody } from '../../hooks/use-fixed-body';
import { DashboardSkeleton } from '../../pages/Dashboard/DashboardSkeleton';
import { DashboardNav } from '../DashboardLayout/DashboardNav';

export const ProtectedLayoutSkeleton = () => {
  useFixedBody();

  return (
    <div className="flex w-full flex-col gap-4">
      <Sticky>
        <div className="animate-skeleton h-[4.75rem]"></div>
      </Sticky>
      <div className="flex grow gap-4">
        <DashboardNav />
        <DashboardSkeleton />
      </div>
    </div>
  );
};
