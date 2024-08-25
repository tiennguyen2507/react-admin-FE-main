import { Loading } from '@/components/ui/loading';
import { NavigateFunction, useNavigate } from 'react-router';

export type ContextMiddleware = { navigate: NavigateFunction };

type TypeParamsPageConfig = {
  Page: any;
  title: string;
  middleware?: Array<(ctx: ContextMiddleware) => Promise<boolean>>;
};

export const PageConfig = ({ Page, title, middleware = [] }: TypeParamsPageConfig) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  document.title = title;

  const handleMiddleware = async (middleware: ((ctx: ContextMiddleware) => Promise<boolean>)[]) => {
    if (middleware.length === 0) return true;
    const [firsMiddleware, ...rest] = middleware;

    const check = await firsMiddleware({ navigate });
    console.log(check);

    if (!check) {
      return navigate('/404');
    }
    await handleMiddleware(middleware.length === 1 ? [] : rest);
  };

  const checkMiddleware = async () => {
    await handleMiddleware(middleware).then(() => setCheck(true));
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
