interface BaseTextProps {
  size?: string;
  color?: string;
  weight?: CSSProperties["fontWeight"];
  className?: string;
  children: ReactNode;
}

export default function BaseText({
  children,
  color = "lynch",
  size = "16",
  weight = "400",
  className = "",
}: BaseTextProps) {
  return (
    <p
      style={{ fontSize: `${size}px`, fontWeight: weight }}
      className={classNames([
        "base-text",
        { [`color-${color}`]: color },
        className,
      ])}
    >
      {children}
    </p>
  );
}
