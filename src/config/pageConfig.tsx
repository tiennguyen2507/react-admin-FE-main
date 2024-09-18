import { Loading } from '@/components/ui/loading';
import { GlobalContextType, useGlobalContext } from '@/context/GlobalContext/useGlobalContext';
import { NavigateFunction, useNavigate } from 'react-router';

export type ContextMiddleware = { navigate: NavigateFunction; globalState: GlobalContextType };

type TypeParamsPageConfig = {
  Page: React.ComponentType<any>;
  title: string;
  middleware?: Array<(ctx: ContextMiddleware) => Promise<boolean>>;
};

export const PageConfig = ({ Page, title, middleware = [] }: TypeParamsPageConfig) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  document.title = title + '| Quản lý Admin';

  const globalState = useGlobalContext();

  const handleMiddleware = async (
    middlewares: ((ctx: ContextMiddleware) => Promise<boolean>)[],
  ) => {
    for (const middleware of middlewares) {
      if (!(await middleware({ navigate, globalState }))) {
        navigate('/404');
        return false;
      }
    }
    return true;
  };

  const checkMiddleware = async () => {
    const result = await handleMiddleware(middleware);
    setCheck(result);
  };

  useEffect(() => {
    checkMiddleware();
  }, []);

  if (!check) {
    return (
      <div className="flex items-center h-screen justify-center">
        <Loading />
      </div>
    );
  }

  return <Page />;
};
