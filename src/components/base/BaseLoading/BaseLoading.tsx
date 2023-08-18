import { resources } from "@/constants/resources";

interface LoadingProps {
  size?: string;
  inline?: boolean;
}

export default function BaseLloading({ size, inline }: LoadingProps) {
  if (inline) {
    return (
      <img
        className="base-loading__image"
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        src={resources.SPIN}
      />
    );
  }
  return (
    <div className="base-loading">
      <img
        className="base-loading__image"
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        src={resources.SPIN}
      />
    </div>
  );
}
