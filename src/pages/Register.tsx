import { useEffect } from 'react';
import { useBlocker, useNavigate } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { Checkbox } from '../components/forms/Checkbox';
import { Input } from '../components/forms/Input';
import { Select } from '../components/forms/Select';
import { Button } from '../components/ui/Button';
import { Confirm } from '../components/ui/Confirm';
import { sleep } from '../helpers/mocks';
import { useZodForm } from '../hooks/use-zod-form';
import { registerUserSchema } from '../services/user/user.schemas';
import type { RegisterUser } from '../services/user/user.types';

export const Register = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty, isSubmitted },
    reset: resetForm,
    inputProps,
  } = useZodForm(registerUserSchema, {
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      location: '',
      consent: false,
    },
  });

  // prevent navigation if form is dirty
  const { proceed, reset, status } = useBlocker({
    condition: isDirty,
  });

  const onSubmit = async (data: RegisterUser) => {
    console.log(data);

    await sleep(500);
    toast.success('Your account has been successfully created');
    resetForm();
  };

  useEffect(() => {
    if (isSubmitted) void navigate({ to: '/login' });
  }, [navigate, isSubmitted]);

  return (
    <>
      {status === 'blocked' && <Confirm confirm={proceed} cancel={reset} />}
      <div className="flex justify-center overflow-auto pt-16">
        <div className="flex w-[min(50rem,100%)] flex-col gap-12 px-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsam
            quisquam ullam aspernatur dolore sit repellendus ratione, quam
            labore asperiores itaque incidunt dignissimos possimus excepturi
            quas doloribus architecto optio amet.
          </p>
          <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className="flex flex-col gap-12 pb-12"
          >
            <div className="flex flex-col gap-12">
              <Input id="username" label="Username*" {...inputProps} />
              <Input type="email" id="email" label="Email*" {...inputProps} />
              <Input id="phone" label="Phone" {...inputProps} />
              <Select
                id="location"
                label="Location*"
                options={[
                  { value: 'africa', label: 'Africa' },
                  { value: 'asia', label: 'Asia' },
                  { value: 'europe', label: 'Europe' },
                  { value: 'north-america', label: 'North America' },
                  { value: 'south-america', label: 'South America' },
                  { value: 'antarctica', label: 'Antarctica' },
                  { value: 'australia', label: 'Australia' },
                ]}
                {...inputProps}
              />
              <Checkbox id="consent" {...inputProps}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                dicta, ex, sequi dolorum minus fuga possimus.
              </Checkbox>
            </div>
            <Button isDisabled={isSubmitting} className="mx-auto">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
