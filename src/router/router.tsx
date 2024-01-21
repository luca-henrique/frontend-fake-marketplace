import { createBrowserRouter } from 'react-router-dom';
import App from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import { Checkout } from '@/pages/Checkout/Checkout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
