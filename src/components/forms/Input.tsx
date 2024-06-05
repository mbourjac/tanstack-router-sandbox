import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { ErrorMessage } from './ErrorMessage';

export type InputProps<T extends FieldValues> = BaseFieldProps<T> & {
  label: string;
};

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { attributes, errorMessage } = useBaseField(props);
  const { id, label } = props;

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between">
        <span>{label}</span>
        <ErrorMessage message={errorMessage} />
      </label>
      <div>
        <input
          {...attributes}
          className="border-main w-full rounded-none px-2 py-1 ring-primary focus:outline-none focus:ring"
        />
      </div>
    </div>
  );
};
