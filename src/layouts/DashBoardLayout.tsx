import SideBar from "@/components/DashBoardSidebar";
import { authencazation } from "@/config/HOC/authencazation";

const DashBoardLayout: FunctionComponent = () => {
  return (
    <div className="dashboard-layout">
      <SideBar />
    </div>
  );
};

export default authencazation(DashBoardLayout);
