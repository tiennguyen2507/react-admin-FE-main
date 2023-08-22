import { createBrowserRouter } from 'react-router-dom';
import lazyLoad from '@/config/HOC/lazyLoad';

const App = lazyLoad(() => import('@/page/App'));

const SignIn = lazyLoad(() => import('@/page/SignIn'));

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/sign-in', element: <SignIn /> },
]);

export default router;
