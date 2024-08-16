import { createBrowserRouter } from 'react-router-dom';
import lazyLoad from '@/config/HOC/lazyLoad';

const App = lazyLoad(() => import('@/page/App'));
const User = lazyLoad(() => import('@/page/user'));
const Product = lazyLoad(() => import('@/page/product'));
const SignIn = lazyLoad(() => import('@/page/SignIn'));

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/user', element: <User /> },
  { path: '/product', element: <Product /> },
  { path: '/sign-in', element: <SignIn /> },
]);

export default router;
