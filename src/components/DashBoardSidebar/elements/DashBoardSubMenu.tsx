import { useLocation, useNavigate } from 'react-router';
import DashBoardMenuItem from './DashBoardMenuItem';

export default function DashBoardSubMenu({
  active,
  items,
  onClickItem,
}: DashBoardMenu.SubMenuProps): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const MenuItem: React.FC = () => {
    if (items.length !== 0) {
      return (
        <div className="dash-board-sub-menu__item">
          {items.map(({ id, label, icon, path }) => (
            <DashBoardMenuItem
              active={path === pathname}
              label={label}
              icon={icon}
              key={id}
              onClick={() => {
                onClickItem && onClickItem(id);
                path && navigate(path);
              }}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div
        className={classNames([
          'dash-board-sub-menu',
          { 'dash-board-sub-menu--active': active },
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
      <MenuItem />
    </>
  );
}
