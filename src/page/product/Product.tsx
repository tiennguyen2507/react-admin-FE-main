import { LoadingWrapper } from '@/components/ui/loading';
import { Table } from '@/components/ui/Table';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { Button } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { EditIcon, DeleteIcon, CheckIcon } from '@nextui-org/shared-icons';
import { Popover } from '@/components/ui/Popover';
import { PageConfig } from '@/config/pageConfig';
import httpRequestAuth from '@/config/httpRequest';
import { withLogin } from '@/middleware/withLogin';
import { useProductFormModal } from './_components/ProductFormModal';

const formatPrice = (price: number) => {
  if (price === 0) return '-';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const Product: React.FC = () => {
  const { setIsUserFormModal, ProductFormModal } = useProductFormModal();
  const { data: products, isLoading } = useQuery({
    queryKey: ['get-product'],
    queryFn: () => httpRequestAuth.get('/products').then(({ data }) => data),
  });

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { key: 'sizes', label: 'Size' },
    { key: 'action', label: '' },
  ];

  return (
    <DashBoardLayout>
      <div className="py-2 mb-2 flex justify-between">
        <h2 className="text-2xl">Sản phẩm</h2>
        <Button
          size="sm"
          color="primary"
          onClick={() => {
            setIsUserFormModal(true);
          }}
        >
          Thêm sản phẩm
        </Button>
      </div>
      <LoadingWrapper isLoading={isLoading}>
        <Table
          columns={columns}
          rows={products}
          renderRow={{
            sizes: ({ sizes }: any) => {
              return (
                <div>
                  {sizes?.map(({ size, price, sales }: any) => (
                    <p key={size} className="flex gap-3 rounded-xl border-2 w-fit px-3 py-1">
                      <span>{size}</span>
                      <span>{formatPrice(price)}</span>
                      <span className="text-red-700">{formatPrice(sales)}</span>
                    </p>
                  ))}
                </div>
              );
            },
            description: ({ description }: any) => description || 'No description',
            action: ({ _id }: { _id: string }) => <ActionTable id={_id} />,
          }}
        />
        <ProductFormModal />
      </LoadingWrapper>
    </DashBoardLayout>
  );
};

const ActionTable: React.FC<{ id: string }> = ({ id }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => httpRequestAuth.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product'] });
    },
  });

  return (
    <span className="flex gap-4 cursor-pointer">
      <Button isIconOnly color="primary" aria-label="Edit" size="sm" variant="ghost">
        <EditIcon />
      </Button>
      <Popover
        content={
          <span className="flex gap-1 items-center">
            Bạn có chắc là xoá chứ!
            <Button size="sm" isIconOnly variant="light" onClick={() => mutate(id)}>
              <CheckIcon />
            </Button>
          </span>
        }
      >
        <Button isIconOnly color="danger" aria-label="Delete" size="sm" variant="ghost">
          <DeleteIcon />
        </Button>
      </Popover>
    </span>
  );
};

export default () =>
  PageConfig({
    Page: Product,
    title: 'Product page',
    middleware: [withLogin],
  });
