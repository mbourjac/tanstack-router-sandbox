import { Link, type ReactNode, type LinkProps } from '@tanstack/react-router';
import { Bulleted } from '../../../components/ui/Bulleted';

type NavLinkProps = LinkProps & {
  isLoading?: boolean;
  children: ReactNode;
};

export const NavLink = ({
  isLoading,
  children,
  ...linkProps
}: NavLinkProps) => {
  return (
    <Link {...linkProps}>
      {({ isActive }) => (
        <Bulleted isActive={isActive || isLoading}>{children}</Bulleted>
      )}
    </Link>
  );
};
