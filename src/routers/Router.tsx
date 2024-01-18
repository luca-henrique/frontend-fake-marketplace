import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '@/pages/NotFound/NotFound';
import { ProductDetail } from '@/pages/ProductDetail/ProductDetail';
import { Checkout } from '@/pages/Checkout/Checkout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
