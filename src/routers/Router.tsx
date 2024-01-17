import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import { ProductDetail } from '../pages/ProductDetail/ProductDetail';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
]);
