import { cn } from '../../lib/tailwind.utils';

type SubmitProps = {
  label?: string;
  className?: string;
  isDisabled?: boolean;
};

export const Submit = ({
  label = 'Submit',
  className,
  isDisabled,
}: SubmitProps) => {
  return (
    <button
      className={cn(
        'w-fit bg-black px-4 py-2 text-xl text-white disabled:bg-slate-400',
        className,
      )}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
