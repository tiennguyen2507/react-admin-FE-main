interface IconProps {
  name: string;
  size?: string;
  color?: string;
}

export default function BaseIcon({
  name = "bx-home",
  color = "chambray",
  size = "16",
}: IconProps) {
  return (
    <span
      style={{ fontSize: `${size}px` }}
      className={classNames("base-icon", [
        {
          [`icon-${name}`]: name,
          [`icon-color-${color}`]: color,
        },
      ])}
    />
  );
}
