import ReactDOM from 'react-dom/client'
import CatalogProvider from './contexts/ProductContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routers/Router.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CatalogProvider> <RouterProvider router={router} /></CatalogProvider>
)
