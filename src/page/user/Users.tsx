import { LoadingWrapper } from '@/components/ui/loading';
import { Table } from '@/components/ui/Table';
import httpRequest from '@/config/httpRequest';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useUserFormModal } from './_component/UserFormModal';

const Users: React.FC = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['get-user'],
    queryFn: () => httpRequest.get('/users').then(({ data }) => data),
  });

  const { UserFormModal, setIsUserFormModal } = useUserFormModal();

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
          columns={[
            { key: 'name', label: 'name' },
            { key: 'email', label: 'email' },
            { key: 'address', label: 'address' },
          ]}
          rows={users}
          renderRow={{
            name: ({ lastName, firstName }: any) => lastName + ' ' + firstName,
            address: ({ address }: any) => address || 'Chưa được cập nhật',
          }}
        />
      </LoadingWrapper>
      <UserFormModal />
    </DashBoardLayout>
  );
};

export default Users;
