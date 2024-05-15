import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import { brandLoader, loadProducts, productLoader } from './utils/loaders';
import Product from './pages/Product';
import Error from './pages/Error';
import Pandora from './pages/Brand';
import Catalog from './pages/Catalog';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/products',
        element: <Catalog />,
        loader: loadProducts,
      },
      {
        path: '/products/:id',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: '/brand/:brand',
        loader: brandLoader,
        element: <Pandora />,
      },
      {
        path: '/about',
        element: <About />,
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
