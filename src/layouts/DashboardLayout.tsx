import { Link, Outlet } from '@tanstack/react-router';
import { Sticky } from '../components/ui/Sticky';

export const DashboardLayout = () => {
  return (
    <div className="flex grow gap-4">
      <Sticky className="self-start">
        <nav
          className="border-main flex h-fit min-w-48 flex-col bg-white py-2"
          aria-label="Dashboard menu"
        >
          <Link to="/dashboard/news" className="px-4 py-2">
            News
          </Link>
        </nav>
      </Sticky>
      <Outlet />
    </div>
  );
};
