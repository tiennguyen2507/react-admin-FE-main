import { Suspense } from "react";

export default (
  component: () => Promise<{ default: FunctionComponent }>,
  isPreloader = true,
  useSpinLoading = false
) => {
  const LazyComponent = lazy(component);

  const renderFallback = (): ReactNode => {
    const preloader = useSpinLoading ?? <BaseLoading />;
    if (isPreloader) {
      return preloader;
    }
    return <></>;
  };

  return (props: any) => (
    <Suspense fallback={renderFallback()}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
