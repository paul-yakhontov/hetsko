import { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { Layout } from './layout/Layout';

const Landing = lazy(() => import('../pages/Landing'));
const Services = lazy(() => import('../pages/Services'));
const About = lazy(() => import('../pages/About'));
const Contacts = lazy(() => import('../pages/Contacts'));

const router = createHashRouter([
  {
    path: ROUTES.root,
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: ROUTES.services.slice(1), element: <Services /> },
      { path: ROUTES.about.slice(1), element: <About /> },
      { path: ROUTES.contacts.slice(1), element: <Contacts /> }
    ]
  }
]);

export function AppRouter() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
