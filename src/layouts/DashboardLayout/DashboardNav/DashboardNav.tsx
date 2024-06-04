import { DashboardNavLink } from './DashboardNavLink';

export const DashboardNav = () => {
  return (
    <nav
      className="border-main mt-4 flex h-fit min-w-48 overflow-auto bg-white md:flex-col"
      aria-label="Dashboard menu"
    >
      <DashboardNavLink to="/dashboard/news">News</DashboardNavLink>
      <DashboardNavLink to="/dashboard/features">Features</DashboardNavLink>
      <DashboardNavLink to="/dashboard/events">Events</DashboardNavLink>
    </nav>
  );
};
