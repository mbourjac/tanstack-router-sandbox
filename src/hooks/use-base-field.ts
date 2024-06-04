import type { HTMLInputTypeAttribute } from 'react';
import type {
  FieldValues,
  FormState,
  Path,
  UseFormGetFieldState,
  UseFormRegister,
} from 'react-hook-form';

export type BaseFieldProps<T extends FieldValues> = {
  id: Path<T>;
  type?: HTMLInputTypeAttribute;
  formState: FormState<T>;
  getFieldState: UseFormGetFieldState<T>;
  register: UseFormRegister<T>;
};

export const useBaseField = <T extends FieldValues>({
  id,
  type,
  formState,
  getFieldState,
  register,
}: BaseFieldProps<T>) => {
  const attributes = {
    id,
    type,
    ...register(id),
  };
  const fieldState = getFieldState(id, formState);
  const errorMessage = fieldState.error?.message;

  return {
    attributes,
    fieldState,
    errorMessage: errorMessage?.toString() ?? '',
  };
};