import { Modal } from '@/components/ui/modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { PlusFilledIcon } from '@nextui-org/shared-icons';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { categoryOptions, FieldValue, productSchema, sizeOptions } from '../../constant';
export const ProductFormModal: React.FC<{
  isOpen: boolean;
  setIsUserFormModal: (value: boolean) => void;
  value: any;
}> = ({ isOpen, setIsUserFormModal, value }) => {
  const [param, setURLSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({ defaultValues: value, resolver: zodResolver(productSchema) });

  const idEdit = param.get('edit');
  const page = param.get('page') || '1';

  const onClose = () => {
    if (idEdit) {
      setURLSearchParams({ page });
    }
    setIsUserFormModal(false);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // if (idEdit) {
    //   editUserMutate(data);
    // } else {
    //   addUserMutate(data);
    // }
  });

  return (
    <Modal
      isOpen={isOpen}
      title={idEdit ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm'}
      onClose={onClose}
      action={{ submit: { label: 'Xác nhận', onClick: onSubmit } }}
      size="3xl"
    >
      <form className="flex flex-col gap-3">
        <Input
          {...register('title')}
          label="Tiêu đề"
          size="sm"
          isInvalid={!!errors.title}
          errorMessage="Please enter a valid title"
        />
        <Textarea label="Mô tả" {...register('description')} />
        <Sizes />
        <Select
          {...register('category')}
          items={categoryOptions}
          label="Phân loại"
          className="w-full"
        >
          {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
        </Select>
      </form>
    </Modal>
  );
};

const Sizes: React.FC = () => {
  const { register } = useForm<FieldValue>({ resolver: zodResolver(productSchema) });
  return (
    <div>
      <p>Thêm kích thước</p>
      <div className="flex gap-3 mt-3">
        <Select
          {...register('category')}
          items={sizeOptions}
          label="Size"
          className="w-20"
          size="sm"
        >
          {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
        </Select>
        <Input label="Giá bán" size="sm" className="w-32" />
        <Input label="Giá sale" size="sm" className="w-32" />
        <Input type="file" size="lg" className="w-fit" />
        <Button size="lg" isIconOnly variant="bordered" color="primary">
          <PlusFilledIcon />
        </Button>
      </div>
    </div>
  );
};
