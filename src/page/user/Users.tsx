import httpRequest from '@/config/httpRequest';
import DashBoardLayout from '@/layouts/DashBoardLayout';

const Users: React.FC = () => {
  const getUsers = async () => {
    const res = await httpRequest.get('/users');
    console.log(res);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <DashBoardLayout>
      <div>hello</div>
    </DashBoardLayout>
  );
};

export default Users;
