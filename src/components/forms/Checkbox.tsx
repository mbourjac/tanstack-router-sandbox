import type { ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';

type CheckboxProps<T extends FieldValues> = Omit<BaseFieldProps<T>, 'type'> & {
  children: ReactNode;
};

export const Checkbox = <T extends FieldValues>(props: CheckboxProps<T>) => {
  const { id, children } = props;
  const { attributes, errorMessage } = useBaseField({
    ...props,
    type: 'checkbox',
  });

  return (
    <div className="flex w-full gap-4">
      <div className="relative">
        <input
          {...attributes}
          className="peer mt-1 size-5 shrink-0 appearance-none border-4 border-black bg-white ring-primary checked:border-0 checked:bg-black focus:outline-none focus:ring"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          className="pointer-events-none absolute top-0 mt-1 hidden size-5 peer-checked:block"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <label htmlFor={id} className="flex flex-col justify-between gap-2">
        <span>{children}</span>
        <span className="flex h-6 items-center justify-end text-right text-base leading-none">
          {errorMessage}
        </span>
      </label>
    </div>
  );
};
