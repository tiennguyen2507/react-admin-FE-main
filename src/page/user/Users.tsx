import Modal from '@/components/ui/modal/Modal';
import Table from '@/components/ui/table';
import httpRequest from '@/config/httpRequest';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { Button } from '@nextui-org/react';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getUsers = async () => {
    const { data } = await httpRequest.get('/users');
    console.log(data);

    setUsers(data);
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
      <Table
        columns={[
          { key: 'name', label: 'name' },
          { key: 'email', label: 'email' },
          { key: 'address', label: 'address' },
        ]}
        rows={users}
        renderRow={{
          name: ({ lastName, firstName }) => lastName + ' ' + firstName,
          address: ({ address }) => address || 'Chưa được cập nhật',
        }}
      />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </DashBoardLayout>
  );
};

export default Users;
