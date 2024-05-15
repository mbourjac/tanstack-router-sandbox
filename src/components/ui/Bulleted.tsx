import type { ReactNode } from 'react';
import { cn } from '../../lib/tailwind.utils';

type BulletedProps = {
  isActive?: boolean;
  children: ReactNode;
};

export const Bulleted = ({ isActive, children }: BulletedProps) => {
  return (
    <span className="inline-flex items-center gap-3">
      <span>{children}</span>
      <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-black">
        <span
          className={cn(
            'h-3 w-3 rounded-full bg-white transition-transform duration-300 group-hover:scale-0',
            isActive && 'scale-0',
          )}
        ></span>
      </span>
    </span>
  );
};
