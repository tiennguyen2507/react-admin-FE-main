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
      ])}
      onClick={onClick}
    >
      <div
        className={classNames("dash-board-menu-item__icon", [
          { "dash-board-menu-item__icon--active": active && !icon },
        ])}
      >
        <BaseIcon name={icon ? icon : "bx-circle"} size={icon ? "18" : "6"} />
      </div>
      <BaseText size="15" weight="600">
        {label}
      </BaseText>
    </div>
  );
}
