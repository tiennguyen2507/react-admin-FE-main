import { Modal } from '@/components/ui/modal';
import httpRequestAuth from '@/config/httpRequest';
import { inputImgToBase64 } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Textarea } from '@nextui-org/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { userSchema, FieldValue } from '../../constant';
import { useSearchParams } from 'react-router-dom';

export const UserFormModal: React.FC<{
  isOpen: boolean;
  setIsUserFormModal: (value: boolean) => void;
  value: any;
}> = ({ isOpen, setIsUserFormModal, value }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<FieldValue>({ defaultValues: value, resolver: zodResolver(userSchema) });
  const [param, setURLSearchParams] = useSearchParams();

  const queryClient = useQueryClient();

  const idEdit = param.get('edit');
  const page = param.get('page') || '1';

  const { mutate: addUserMutate } = useMutation({
    mutationFn: (data: FieldValue) => httpRequestAuth.post('/users', data),
    onSuccess: () => {
      setIsUserFormModal(false);
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
    },
  });

  const { mutate: editUserMutate } = useMutation({
    mutationFn: (data: FieldValue) => httpRequestAuth.patch(`/users/${idEdit}`, data),
    onSuccess: () => {
      setIsUserFormModal(false);
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
      setURLSearchParams({ page });
    },
  });

  const onClose = () => {
    if (idEdit) {
      setURLSearchParams({ page });
    }
    setIsUserFormModal(false);
  };

  const onSubmit = handleSubmit((data) => {
    if (idEdit) {
      editUserMutate(data);
    } else {
      addUserMutate(data);
    }
  });

  return (
    <Modal
      isOpen={isOpen}
      title={idEdit ? 'Chỉnh sửa người dùng' : 'Thêm người dùng'}
      onClose={onClose}
      action={{ submit: { label: 'Xác nhận', isDisabled: !isValid, onClick: onSubmit } }}
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
        <Textarea label="Địa chỉ" {...register('address')} />
        <Input
          type="file"
          label="Avatar"
          size="sm"
          onChange={async (event) => {
            const avatarString = await inputImgToBase64(
              event?.target?.files !== null ? event?.target?.files[0] : null,
            );
            if (!!avatarString) {
              setValue('avatar', avatarString);
            }
          }}
        />
      </form>
    </Modal>
  );
};
