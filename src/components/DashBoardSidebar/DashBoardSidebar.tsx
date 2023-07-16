import DashBoardSubMenu from "./elements/DashBoardSubMenu";
import { resources } from "@/constants/resources";
import BaseText from "@/components/base/BaseText";
import DashBoardMenuItem from "./elements/DashBoardMenuItem";
import { useState } from "react";

const menuList: DashBoardMenu.MenusList[] = [
  {
    id: "dashboard-home",
    label: "Dashboards",
    icon: "bx-home",
    children: [
      { id: "dashboard-home-children-1", label: "Analytics" },
      { id: "dashboard-home-children-2", label: "eCommerce" },
    ],
  },
  { id: "dashboard-email", label: "Email", icon: "email" },
  { id: "dashboard-chart", label: "Chat", icon: "Message" },
];

export default function SideBar(): JSX.Element {
  const [selectItem, setSelectItem] = useState("dashboard-home-children-1");

  const renderHeader = (): JSX.Element => (
    <div className="dash-board-sidebar__header">
      <img src={resources.logo} />
      <BaseText size="30" weight="700" color="kashmir-blue">
        sneat
      </BaseText>
    </div>
  );

  return (
    <div className="dash-board-sidebar">
      {renderHeader()}
      <div className="dash-board-sidebar__menu">
        {menuList.map(({ id, label, children, icon }) => (
          <>
            {children ? (
              <DashBoardSubMenu
                active={children.some((item) => item.id === selectItem)}
                selectItem={selectItem}
                key={id}
                items={children}
                onClickItem={(id) => setSelectItem(id)}
              />
            ) : (
              <DashBoardMenuItem
                active={id === selectItem}
                label={label}
                icon={icon}
                key={id}
                onClick={() => setSelectItem(id)}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
