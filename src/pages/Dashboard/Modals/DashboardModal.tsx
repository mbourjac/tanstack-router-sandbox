import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { Icon } from '../../../components/ui/Icon';
import { useDashboardHeight } from '../../../hooks/use-dashboard-height';

type DashboardModalProps = {
  heading: string;
  children: ReactNode;
};

export const DashboardModal = ({ heading, children }: DashboardModalProps) => {
  const height = useDashboardHeight({ withPadding: true });

  return (
    <div className="border-main relative mt-4 flex flex-col" style={{ height }}>
      <div className="sticky top-0 flex justify-between border-b-8 border-black bg-white">
        <h2 className="p-4">{heading}</h2>
        <Link to="/dashboard" className="flex items-center px-5 py-4">
          <Icon kind="close" aria-hidden />
          <span className="sr-only">Back to dashboard</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4 overflow-auto p-4">{children}</div>
    </div>
  );
};
