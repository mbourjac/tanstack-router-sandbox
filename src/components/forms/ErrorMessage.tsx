import { cn } from '../../lib/tailwind.utils';

type ErrorMessageProps = {
  message: string | undefined;
  preventLayoutShift?: boolean;
  className?: string;
};

export const ErrorMessage = ({
  message,
  preventLayoutShift,
  className,
}: ErrorMessageProps) => {
  return message ?? preventLayoutShift ?
      <span
        role="alert"
        className={cn(
          'text-base leading-none',
          preventLayoutShift && 'h-6',
          className,
        )}
      >
        {message}
      </span>
    : null;
};
