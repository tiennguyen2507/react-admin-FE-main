interface BaseTextProps {
  size?: string;
  color?: string;
  weight?: string;
  className?: string;
  children: React.ReactNode;
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
      className={`base-text color-${color} ${className}`}
    >
      {children}
    </p>
  );
}
