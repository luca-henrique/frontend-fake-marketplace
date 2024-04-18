import { CatalogProductList } from '../../components/atomic/organisms/CatalogProductList/CatalogProductList';
import { FiltersProduct } from '../../components/atomic/organisms/FiltersProduct/FiltersProduct';
import { PageLayout } from '../../components/atomic/layout/HomeLayout';

function App() {

  return (
    <PageLayout title="Mercado">
      <div className="flex sm:flex-row flex-col-reverse">
        <CatalogProductList />
        <FiltersProduct />
      </div>
    </PageLayout>
  );
}

export default App;
