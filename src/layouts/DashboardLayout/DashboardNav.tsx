import { Link } from '@tanstack/react-router';

export const DashboardNav = () => {
  return (
    <nav
      className="border-main mt-4 flex h-fit min-w-48 flex-col bg-white py-2"
      aria-label="Dashboard menu"
    >
      <Link to="/dashboard/news" className="px-4 py-2">
        News
      </Link>
    </nav>
  );
};
