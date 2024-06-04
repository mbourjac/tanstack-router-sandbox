import type { ReactNode } from 'react';
import { cn } from '../../lib/tailwind.utils';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  children: ReactNode;
};

export const Button = ({
  onClick,
  className,
  isDisabled,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-fit bg-black px-4 py-2 text-xl text-white transition-colors duration-150 hover:text-primary disabled:text-primary disabled:opacity-50',
        className,
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
