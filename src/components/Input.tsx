import type { InputHTMLAttributes } from 'react';
import type {
  FieldErrors,
  Path,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

export type InputProps<T extends FieldValues> = {
  id: Path<T>;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  label: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
};

export const Input = <T extends FieldValues>({
  id,
  type,
  label,
  errors,
  register,
}: InputProps<T>) => {
  const inputAttributes = {
    id,
    type,
    ...register(id),
  };

  const errorMessage = errors[id]?.message?.toString();

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="flex justify-between">
        <span>{label}</span>
        {errorMessage && <span>{errorMessage}</span>}
      </label>
      <div>
        <input
          key={id}
          {...inputAttributes}
          className="w-full border border-black px-2 py-1"
        />
      </div>
    </div>
  );
};
