export default (Component: FunctionComponent): FunctionComponent =>
  (prop: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const route = '/about';

    const pathPublic = ['/about', '/contract'];

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);

    const isPagePublic = useMemo<boolean>(() => pathPublic.includes(route), []);

    if (isLoading && !isPagePublic) {
      return <BaseLoading />;
    }
    return <Component {...prop} />;
  };
