import ReactDOM from 'react-dom/client'
import CatalogProvider from './contexts/ProductContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routers/Router.tsx"
import "../app/globals.css"
import { Provider } from 'react-redux'
import { store } from './store/index.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}><CatalogProvider> <RouterProvider router={router} /></CatalogProvider></Provider>
)
