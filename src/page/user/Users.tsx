import { LoadingWrapper } from '@/components/ui/loading';
import { Table } from '@/components/ui/Table';
import httpRequest from '@/config/httpRequest';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { Button } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserFormModal } from './_components/UserFormModal';
import { EditIcon, DeleteIcon, CheckIcon } from '@nextui-org/shared-icons';
import { Popover } from '@/components/ui/Popover';

const Users: React.FC = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['get-user'],
    queryFn: () => httpRequest.get('/users').then(({ data }) => data),
  });

  const { UserFormModal, setIsUserFormModal } = useUserFormModal();

  const columns = [
    { key: 'name', label: 'name' },
    { key: 'email', label: 'email' },
    { key: 'address', label: 'address' },
    { key: 'action', label: '' },
  ];

  return (
    <DashBoardLayout>
      <div className="py-2 mb-2 flex justify-between">
        <h2 className="text-2xl">User</h2>
        <Button size="sm" color="primary" onClick={() => setIsUserFormModal(true)}>
          add
        </Button>
      </div>
      <LoadingWrapper isLoading={isLoading}>
        <Table
          columns={columns}
          rows={users}
          renderRow={{
            name: ({ lastName, firstName }: any) => lastName + ' ' + firstName,
            address: ({ address }: any) => address || 'Chưa được cập nhật',
            action: ({ _id }: { _id: string }) => <ActionTable id={_id} />,
          }}
        />
      </LoadingWrapper>
      <UserFormModal />
    </DashBoardLayout>
  );
};

const ActionTable: React.FC<{ id: string }> = ({ id }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => httpRequest.delete(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
    },
  });
  return (
    <span className="flex gap-4 cursor-pointer">
      <Button isIconOnly color="primary" aria-label="Like" size="sm" variant="ghost">
        <EditIcon />
      </Button>
      <Popover
        content={
          <span className="flex gap-1 items-center">
            Bạn có muốn xoá!
            <Button size="sm" isIconOnly variant="light" onClick={() => mutate(id)}>
              <CheckIcon />
            </Button>
          </span>
        }
      >
        <Button isIconOnly color="danger" aria-label="Like" size="sm" variant="ghost">
          <DeleteIcon />
        </Button>
      </Popover>
    </span>
  );
};

export default Users;
