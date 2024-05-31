import type { SVGAttributes } from 'react';
import { cn } from '../../lib/tailwind.utils';

export type IconProps = Omit<
  SVGAttributes<SVGSVGElement>,
  'xmlns' | 'viewBox' | 'className' | 'fill'
> & {
  kind: keyof typeof iconsMapping;
  viewBox?: string;
  fill?: string;
  className?: string;
};

const iconsMapping = {
  menu: (
    <>
      <rect width="24" height="6" fill="currentColor" />
      <rect y="9" width="24" height="6" fill="currentColor" />
      <rect y="18" width="24" height="6" fill="currentColor" />
    </>
  ),
  close: (
    <>
      <rect
        y="19.2"
        width="27.1529"
        height="6.78822"
        transform="rotate(-45 0 19.2)"
        fill="currentColor"
      />
      <rect
        x="4.80002"
        width="27.1529"
        height="6.78822"
        transform="rotate(45 4.80002 0)"
        fill="currentColor"
      />
    </>
  ),
  success: (
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  ),
  error: (
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  ),
};

export const Icon = ({ kind, className, ...attributes }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('size-5', className)}
      {...attributes}
    >
      {iconsMapping[kind]}
    </svg>
  );
};
