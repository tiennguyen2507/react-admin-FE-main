const BaseImage: FunctionComponent<{
  src: string;
  height?: number;
  width?: number;
  className?: string;
  fallback?: ReactNode;
}> = ({ src, fallback, className, width, height }) => {
  const [isError, setIsError] = useState(false);

  const renderDefault = (): JSX.Element => {
    if (fallback) {
      return <>{fallback}</>;
    }
    return (
      <img width={width} height={height} className="image-default">
        <BaseIcon name="bx-home" size="24" color="doveGray" />
      </img>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isError || !src) {
      return renderDefault();
    }
    return (
      <img
        src={src}
        onError={() => setIsError(true)}
        className={className}
        width={width}
        height={height}
      />
    );
  };

  return renderContent();
};

BaseImage.defaultProps = {
  fallback: null,
  className: "",
};

export default BaseImage;
