import SideBar from '@/components/DashBoardSidebar';
import { authentication } from '@/config/HOC/authentication';
import { Button } from '@nextui-org/react';

const DashBoardLayout: FunctionComponent = () => {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div>
        <Button color="primary" className="w-60">
          Button
        </Button>
      </div>
    </div>
  );
};

export default authentication(DashBoardLayout);
