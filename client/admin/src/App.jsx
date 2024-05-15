import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Main from './pages/Main';
import Error from './pages/Error';
import { loadOrders } from './utils/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/main',
        loader: loadOrders,
        element: <Main />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
