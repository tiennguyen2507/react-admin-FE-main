import { resources } from '@/constants/resources';
import DashBoardSubMenu from './elements/DashBoardSubMenu';
import DashBoardMenuItem from './elements/DashBoardMenuItem';

const menuList: DashBoardMenu.MenusList[] = [
  {
    id: 'dashboard-home',
    label: 'Dashboards',
    icon: 'bx-home',
    children: [
      { id: 'dashboard-home-children-1', label: 'User', path: '/user' },
      { id: 'dashboard-home-children-2', label: 'Product', path: '/product' },
    ],
  },
  { id: 'dashboard-email', label: 'Email', icon: 'email' },
  { id: 'dashboard-chart', label: 'Chat', icon: 'Message' },
];

export default function SideBar(): JSX.Element {
  const [selectItem, setSelectItem] = useState('dashboard-home-children-1');

  const renderHeader = (): JSX.Element => (
    <div className="dash-board-sidebar__header">
      <img src={resources.LOGO} />
      <BaseText size="30" weight="700" color="kashmir-blue">
        sneat
      </BaseText>
    </div>
  );

  const renderMenu = ({
    id,
    label,
    children,
    icon,
  }: DashBoardMenu.MenusList): JSX.Element => {
    if (children) {
      return (
        <DashBoardSubMenu
          active={children.some((item) => item.id === selectItem)}
          selectItem={selectItem}
          key={id}
          items={children}
          onClickItem={(id) => {
            setSelectItem(id);
          }}
        />
      );
    }
    return (
      <DashBoardMenuItem
        active={id === selectItem}
        label={label}
        icon={icon}
        key={id}
        onClick={() => setSelectItem(id)}
      />
    );
  };

  return (
    <div className="dash-board-sidebar">
      {renderHeader()}
      <div className="dash-board-sidebar__menu">{menuList.map(renderMenu)}</div>
    </div>
  );
}
