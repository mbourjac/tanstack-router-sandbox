import { useRef, type ReactNode } from 'react';
import { useBoundingBox } from '../../hooks/use-bounding-box';
import { cn } from '../../lib/tailwind.utils';

type StickyProps = {
  className?: string;
  children: ReactNode;
};

export const Sticky = ({ className, children }: StickyProps) => {
  const stickyElementRef = useRef<HTMLDivElement>(null);
  const { top } = useBoundingBox({ elementRef: stickyElementRef });

  const isReady = top > 0;

  return (
    <div
      ref={stickyElementRef}
      className={cn(className, isReady && 'sticky')}
      style={{ top }}
    >
      {children}
    </div>
  );
};
