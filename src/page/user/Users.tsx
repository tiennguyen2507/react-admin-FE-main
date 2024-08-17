import { useLoading } from '@/components/ui/loading';
import { Modal } from '@/components/ui/modal';
import { Table } from '@/components/ui/table';
import httpRequest from '@/config/httpRequest';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { Button } from '@nextui-org/react';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { LoadingWrapper, setIsLoading } = useLoading();
  const getUsers = async () => {
    setIsLoading(true);
    const { data } = await httpRequest.get('/users');

    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <DashBoardLayout>
      <div className="py-2 mb-2 flex justify-between">
        <h2 className="text-2xl">User</h2>
        <Button size="sm" color="primary" onClick={() => setIsOpenModal(true)}>
          add
        </Button>
      </div>
      <LoadingWrapper>
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
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </DashBoardLayout>
  );
};

export default Users;
