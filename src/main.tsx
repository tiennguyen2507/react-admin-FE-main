import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.scss';
import { RouterProvider } from 'react-router';
import router from '@/config/router';
import { resources } from '@/constants/resources';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <Helmet>
          <title>app-user</title>
          <meta name="description" content="App user" />
          <meta property="og:title" content="App user" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={resources.LOGO} />
          <meta property="og:description" content="Site description" />
          <meta name="theme-color" content="#FF0000" />
        </Helmet>
      </NextUIProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
