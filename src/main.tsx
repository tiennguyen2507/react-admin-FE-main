import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.scss';
import { RouterProvider } from 'react-router';
import router from '@/config/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
