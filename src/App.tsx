import { CatalogProductList } from '@/components/atomic/organisms/CatalogProductList/CatalogProductList';
import { Header } from '@/components/atomic/organisms/Header/Header';
import { FiltersProduct } from '@/components/atomic/organisms/FiltersProduct/FiltersProduct';
import { Input } from './components/atomic/atom/Input/Input';
import { useSearchProduct } from './hooks/useSearchProduct';

function App() {
  const {setInputSearch} = useSearchProduct()
  
  return (
    <div className='bg-black'>
      <Header />
      <Input onChange={setInputSearch} />
      <FiltersProduct /> 
      <CatalogProductList />
    </div>
  )
}

export default App
