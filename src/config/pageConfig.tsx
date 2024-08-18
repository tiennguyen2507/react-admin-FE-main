import { Loading } from '@/components/ui/loading';
import { useNavigate } from 'react-router';

type TypeParamsPageConfig = {
  Page: any;
  title: string;
  middleware?: (() => Promise<boolean>)[];
};

export const PageConfig = ({ Page, title, middleware = [] }: TypeParamsPageConfig) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  document.title = title;

  const handleMiddleware = async (middleware: (() => Promise<boolean>)[]) => {
    if (middleware.length === 0) return true;
    const [firsMiddleware, ...rest] = middleware;

    const check = await firsMiddleware();
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

  if (check) {
    return <Page />;
  }
  return (
    <div className="flex items-center h-screen justify-center">
      <Loading />
    </div>
  );
};
