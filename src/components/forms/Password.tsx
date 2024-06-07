import { useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { Icon } from '../ui/Icon';
import { ErrorMessage } from './ErrorMessage';

export type PasswordProps<T extends FieldValues> = Omit<
  BaseFieldProps<T>,
  'type'
> & {
  label: string;
};

export const Password = <T extends FieldValues>(props: PasswordProps<T>) => {
  const { id, label } = props;
  const { attributes, errorMessage } = useBaseField({
    ...props,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          {...attributes}
          className="border-main w-full rounded-none px-2 py-1 ring-primary focus:outline-none focus:ring"
          type={isPasswordVisible ? 'text' : 'password'}
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-0 top-0 flex aspect-square h-full items-center justify-center"
        >
          <Icon
            kind={isPasswordVisible ? 'hidden' : 'visible'}
            screenReaderLabel={`${
              isPasswordVisible ? 'Hide' : 'Show'
            } password`}
            className="size-6"
          />
        </button>
      </div>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};
