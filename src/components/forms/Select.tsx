import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';

type SelectProps<T extends FieldValues> = Omit<BaseFieldProps<T>, 'type'> & {
  label: string;
  options: { value: string; label: string }[];
};

export const Select = <T extends FieldValues>(props: SelectProps<T>) => {
  const { id, label, options } = props;
  const { attributes, errorMessage } = useBaseField(props);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between">
        <span>{label}</span>
        {errorMessage && (
          <span className="text-base leading-none">{errorMessage}</span>
        )}
      </label>
      <div className="grid items-center">
        <select
          {...attributes}
          className="border-main col-start-1 row-start-1 w-full appearance-none px-2 py-1 ring-primary focus:outline-none focus:ring"
        >
          <option value="" aria-hidden="true" disabled>
            Please choose an option
          </option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 justify-self-end"
        >
          <path
            d="M4.24264 3.75732L16.2426 15.7573L12 20L0 7.99997L4.24264 3.75732Z"
            fill="black"
          />
          <path
            d="M24 7.99998L12 20L7.75737 15.7573L19.7574 3.75734L24 7.99998Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};
