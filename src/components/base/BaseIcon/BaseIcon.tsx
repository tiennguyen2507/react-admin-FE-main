interface IconProps {
  name: string;
  size?: string;
  color?: string;
}

const BaseIcon: FunctionComponent<IconProps> = ({ name, color, size }) => (
  <span
    style={{ fontSize: `${size}px` }}
    className={classNames('base-icon', [
      {
        [`icon-${name}`]: name,
        [`icon-color-${color}`]: color,
      },
    ])}
  />
);

BaseIcon.defaultProps = {
  name: 'bx-home',
  color: 'chambray',
  size: '16',
};

export default BaseIcon;
