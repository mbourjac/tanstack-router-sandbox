import { Link } from '@tanstack/react-router';
import { Sticky } from '../../components/ui/Sticky';

export const DashboardNav = () => {
  return (
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
  );
};
