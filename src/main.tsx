import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './app/Providers';
import { AppRouter } from './app/Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </React.StrictMode>
);
