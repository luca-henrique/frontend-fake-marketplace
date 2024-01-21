import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from '@/router/router';
import { store } from '@/store/index.ts';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../app/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>,
);
