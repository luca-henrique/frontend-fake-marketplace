import { CatalogProductList } from '../../components/atomic/organisms/CatalogProductList/CatalogProductList';
import { FiltersProduct } from '../../components/atomic/organisms/FiltersProduct/FiltersProduct';
import { useSearchProduct } from '../../hooks/useSearchProduct';
import { PageLayout } from '../../components/atomic/layout/HomeLayout';
import { InputWithDebounce } from '@/components/atomic/atom';

function App() {
  const { setInputSearch } = useSearchProduct();

  return (
    <PageLayout title="Mercado">
      <InputWithDebounce onChange={setInputSearch} />
      <div className="flex sm:flex-row flex-col-reverse">
        <CatalogProductList />
        <FiltersProduct />
      </div>
    </PageLayout>
  );
}

export default App;
