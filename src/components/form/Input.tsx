import type { FieldValues } from 'react-hook-form';
import { type FieldBaseProps, useFormField } from '../../hooks/use-form-field';

export type InputProps<T extends FieldValues> = FieldBaseProps<T> & {
  label: string;
};

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { attributes, errorMessage } = useFormField(props);
  const { id, label } = props;

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between">
        <span>{label}</span>
        {errorMessage && (
          <span className="text-base leading-none">{errorMessage}</span>
        )}
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
