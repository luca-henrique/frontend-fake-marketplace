import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { router } from "@/routers/Router.tsx"
import { store } from '@/store/index.ts'

import "../app/globals.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
)
