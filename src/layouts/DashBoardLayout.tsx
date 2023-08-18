import { authenticator } from "@/HOC";
import SideBar from "@/components/DashBoardSidebar";

const DashBoardLayout: FunctionComponent = () => {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div className="dashboard-layout__content">
        <BaseLoading />
      </div>
    </div>
  );
};

export default authenticator(DashBoardLayout);
