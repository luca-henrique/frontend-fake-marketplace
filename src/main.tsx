import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CatalogProvider from './contexts/ProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CatalogProvider><App /></CatalogProvider>
)
