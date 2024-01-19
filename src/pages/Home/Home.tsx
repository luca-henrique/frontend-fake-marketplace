import { CatalogProductList } from '@/components/atomic/organisms/CatalogProductList/CatalogProductList';
import { Header } from '@/components/atomic/organisms/Header/Header';
import { FiltersProduct } from '@/components/atomic/organisms/FiltersProduct/FiltersProduct';
import { Input } from '../../components/atomic/atom/Input/Input';
import { useSearchProduct } from '../../hooks/useSearchProduct';

function App() {
  const {setInputSearch} = useSearchProduct()
  
  return (
    <div className='bg-black'>
      <Header />
      <div className='py-6 px-4 md:px-22 lg:px-36'>
        <Input onChange={setInputSearch} />
        <div className='flex flex-row'>
          <CatalogProductList />
          <FiltersProduct /> 
        </div>
      </div>
    </div>
  )
}

export default App
