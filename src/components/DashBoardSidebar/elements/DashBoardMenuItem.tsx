import BaseIcon from "@/components/base/BaseIcon/BaseIcon";
import BaseText from "@/components/base/BaseText/BaseText";
import classNames from "classnames";

export default function DashBoardMenuItem({
  active,
  icon,
  label,
  onClick,
}: DashBoardMenu.MenuItemProps) {
  return (
    <div
      className={classNames([
        "dash-board-menu-item",
        { "dash-board-menu-item--active": active && icon },
        { "dash-board-menu-item--sub-active": active && !icon },
      ])}
      onClick={onClick}
    >
      <div className="dash-board-menu-item__icon">
        <BaseIcon name={icon ? icon : "bx-circle"} size={icon ? "18" : "6"} />
      </div>
      <BaseText size="15" weight={active && !icon ? "600" : "400"}>
        {label}
      </BaseText>
    </div>
  );
}
