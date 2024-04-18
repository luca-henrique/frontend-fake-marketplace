import { createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/NotFound/NotFound';
import { Checkout } from '@/pages/Checkout/Checkout';

import {ConstructComponent} from "@/pages/ConstructComponent/ConstructComponent"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ConstructComponent />,
    errorElement: <NotFound />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);
