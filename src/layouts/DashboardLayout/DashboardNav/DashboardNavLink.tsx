import { Link, type ReactNode, type LinkProps } from '@tanstack/react-router';

type DashboardNavLinkProps = LinkProps & {
  isLoading?: boolean;
  children: ReactNode;
};

export const DashboardNavLink = ({
  children,
  ...linkProps
}: DashboardNavLinkProps) => {
  return (
    <Link
      {...linkProps}
      activeProps={{ className: 'bg-primary' }}
      className="p-4 transition-colors duration-150 hover:bg-primary"
    >
      {children}
    </Link>
  );
};
