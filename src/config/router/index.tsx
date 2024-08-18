import { createBrowserRouter } from 'react-router-dom';
import lazyLoad from '@/config/HOC/lazyLoad';
import User from '@/page/user';
import Page404 from '@/page/404';

const App = lazyLoad(() => import('@/page/App'));
const Product = lazyLoad(() => import('@/page/product'));
const SignIn = lazyLoad(() => import('@/page/Login'));

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/user', element: <User /> },
  { path: '/product', element: <Product /> },
  { path: '/login', element: <SignIn /> },
  { path: '/404', element: <Page404 /> },
  { path: '/*', element: <Page404 /> },
]);

export default router;
