import DashBoardMenuItem from "./DashBoardMenuItem";

export default function DashBoardSubMenu({
  selectItem,
  active,
  items,
  onClickItem,
}: DashBoardMenu.SubMenuProps): JSX.Element {
  const renderMenuItem = (): JSX.Element | null => {
    if (items.length !== 0) {
      return (
        <div className="dash-board-sub-menu__item">
          {items.map(({ id, label, icon }) => (
            <DashBoardMenuItem
              active={id === selectItem}
              label={label}
              icon={icon}
              key={id}
              onClick={() => onClickItem && onClickItem(id)}
            />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div
        className={classNames([
          "dash-board-sub-menu",
          { "dash-board-sub-menu--active": active },
        ])}
      >
        <div className="dash-board-sub-menu__content">
          <BaseIcon name="bx-home" size="18" />
          <BaseText size="15" className="dash-board-sub-menu__title">
            Dashboards
          </BaseText>
        </div>
        <BaseIcon name="arrow-down" size="10" />
      </div>
      {renderMenuItem()}
    </>
  );
}
