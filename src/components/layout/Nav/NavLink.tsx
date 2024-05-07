import { Link, type ReactNode, type LinkProps } from '@tanstack/react-router';

type NavLinkProps = {
  to: LinkProps['to'];
  children: ReactNode;
};

export const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="px-4 py-2 hover:bg-primary"
      activeProps={{
        className: 'bg-primary',
      }}
    >
      {children}
    </Link>
  );
};
