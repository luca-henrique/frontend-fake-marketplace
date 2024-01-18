/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { CatalogContext, CatalogType } from './contexts/ProductContext';
import { Category } from './types/Category';
import { useSearchParams } from 'react-router-dom';
import { CatalogProductList } from './components/atomic/organisms/CatalogProductList/CatalogProductList';
import { Header } from './components/atomic/organisms/Header/Header';


function App() {
  const { totalPriceItemsCartFormated, totalItemsCartCount } = useContext(CatalogContext) as CatalogType;

  return (
    <div className='bg-black'>
      <Header />

     <div>
        <h5>Total:{totalPriceItemsCartFormated}</h5>
        <h5>Quantidade:{totalItemsCartCount}</h5>
      </div>
      {/*

      <div><input type='search' placeholder='buscar produto' /></div>

      <FilterProduct /> */}
      <CatalogProductList />
    </div>
  )
}





export const FilterProduct = () => {
  const { categories } = useContext(CatalogContext) as CatalogType;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleRouter = (indexCategory: string) => {
    setSearchParams({ category: indexCategory });

    if (indexCategory == '0') {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
  }

  return (
    <div>
      <div>
        <label>Tudo</label>
        <input type="checkbox" title='categories' onClick={() => handleRouter('0')} />
      </div>
      {categories.map((category: Category) =>
        <div key={category.id}>
          <label>{category.name}</label>
          <input type="checkbox" value={category.name} title='categories' onClick={() => handleRouter(category.id)} />
        </div>
      )}
    </div>
  )

}

export default App
