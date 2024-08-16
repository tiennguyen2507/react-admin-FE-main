declare namespace DashBoardMenu {
  interface MenuItemProps {
    active?: boolean;
    icon?: string;
    label: string;
    onClick?: () => void;
  }

  interface SubMenuProps {
    selectItem: string;
    active?: boolean;
    items: MenuItem[];
    onClickItem?: (id: string) => void;
  }

  interface MenuItem {
    id: string;
    label: string;
    icon?: string;
    path?: string;
  }

  interface MenusList extends MenuItem {
    children?: MenuItem[];
  }
}
