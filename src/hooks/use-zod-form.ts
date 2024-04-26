import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

export const useZodForm = <T extends z.ZodTypeAny>(schema: T) => {
  const form = useForm<z.infer<typeof schema>>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const inputProps = { register: form.register, errors: form.formState.errors };

  return { ...form, inputProps };
};
