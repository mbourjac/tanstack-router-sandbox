import { Link, type ReactNode, type LinkProps } from '@tanstack/react-router';
import { Bulleted } from '../../../components/ui/Bulleted';

type NavLinkProps = {
  to: LinkProps['to'];
  children: ReactNode;
};

export const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link to={to}>
      {({ isActive }) => <Bulleted isActive={isActive}>{children}</Bulleted>}
    </Link>
  );
};
