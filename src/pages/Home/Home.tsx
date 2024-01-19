import { CatalogProductList } from "@/components/atomic/organisms/CatalogProductList/CatalogProductList";
import { FiltersProduct } from "@/components/atomic/organisms/FiltersProduct/FiltersProduct";
import { Input } from "../../components/atomic/atom/Input/Input";
import { useSearchProduct } from "../../hooks/useSearchProduct";
import { PageLayout } from "@/components/atomic/layout/HomeLayout";

function App() {
  const { setInputSearch } = useSearchProduct();

  return (
    <PageLayout title="Catalogo de Produtos">
      <Input onChange={setInputSearch} />
      <div className="flex sm:flex-row flex-col-reverse">
        <CatalogProductList />
        <FiltersProduct />
      </div>
    </PageLayout>
  );
}

export default App;
