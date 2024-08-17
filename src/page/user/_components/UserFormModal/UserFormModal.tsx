import { Modal } from '@/components/ui/modal';
import httpRequest from '@/config/httpRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

type FieldValue = z.infer<typeof userSchema>;

export const UserFormModal: React.FC<{
  isOpen: boolean;
  setIsUserFormModal: (value: boolean) => void;
}> = ({ isOpen, setIsUserFormModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({ resolver: zodResolver(userSchema) });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: FieldValue) => httpRequest.post('/users', data),
    onSuccess: () => {
      setIsUserFormModal(false);
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      title="User"
      onClose={() => setIsUserFormModal(false)}
      action={{ submit: { onClick: handleSubmit((data) => mutate(data)) } }}
    >
      <form className="flex flex-col gap-3">
        <Input
          {...register('firstName')}
          label="First Name"
          size="sm"
          isInvalid={!!errors.firstName}
          errorMessage="Please enter a valid firstName"
        />
        <Input
          {...register('lastName')}
          label="Last Name"
          size="sm"
          isInvalid={!!errors.lastName}
          errorMessage="Please enter a valid lastName"
        />
        <Input
          {...register('email')}
          type="email"
          label="Email"
          size="sm"
          isInvalid={!!errors.email}
          errorMessage="Please enter a valid email"
        />
        <Input
          {...register('password')}
          type="password"
          label="Password"
          size="sm"
          isInvalid={!!errors.password}
          errorMessage="Please enter a valid password"
        />
      </form>
    </Modal>
  );
};
