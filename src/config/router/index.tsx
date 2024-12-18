import { createBrowserRouter, Navigate } from 'react-router-dom';
import lazyLoad from '@/config/HOC/lazyLoad';
import User from '@/page/user';
import Page404 from '@/page/404';
import Product from '@/page/product';
import Portfolio from '@/page/Portfolio'; // Add this line

const SignIn = lazyLoad(() => import('@/page/Login'));

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/User" replace /> },
  { path: '/user', element: <User /> },
  { path: '/product', element: <Product /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/login', element: <SignIn /> },
  { path: '/404', element: <Page404 /> },
  { path: '/*', element: <Page404 /> },
]);

export default router;
