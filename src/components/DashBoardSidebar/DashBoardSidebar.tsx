import { resources } from "@/constants/resources";
import BaseIcon from "@/components/base/BaseIcon";

export default function SideBar() {
  return (
    <div className="dash-board-sidebar">
      <img src={resources.logo} />
      <BaseIcon name="bx-home" size="20" />
    </div>
  );
}
