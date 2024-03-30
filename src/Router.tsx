import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/home.js';
import Layout from './pages/layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
