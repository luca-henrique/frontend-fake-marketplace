/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { ProductType } from './types/Product';
import { CatalogContext, CatalogType } from './contexts/ProductContext';
import { numberFormatBr } from './util/numberFormater';
import { Category } from './types/Category';
import { useSearchParams } from 'react-router-dom';


function App() {
  const { totalPriceItemsCartFormated, totalItemsCartCount, categories } = useContext(CatalogContext) as CatalogType;
  const [searchParams, setSearchParams] = useSearchParams();
  
  console.log(searchParams)
  
  const handleRouter = (indexCategory: string) => {
    setSearchParams({ category: indexCategory });
    const {size} = searchParams
    
    if (size === indexCategory){
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
    
    if (indexCategory == '0') {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
    
  }
  
  return (
    <div>
      
      <div>
        <h5>Cart:{totalPriceItemsCartFormated}</h5>
        <h5>Total:{totalItemsCartCount}</h5>
      </div>
      
      <div><input type='search' placeholder='buscar produto' /></div>
      
      <div>
        <div>
          <label>Tudo</label>
          <input type="checkbox" title='categories' onClick={() => handleRouter(0)} />
        </div>
          {categories.map((category: Category) => 
            <div key={category.id}>
              <label>{category.name}</label>
              <input type="checkbox" value={category.name} title='categories' onClick={() => handleRouter(category.id)}  />
            </div>
           )}
      </div>
      
      <CatalogProductList />
      
      
    </div>
  )
}


const CatalogProductList = () => {
  const { products, addProductCart } = useContext(CatalogContext) as CatalogType;

  return(
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <img title='product-image' src={product.images[0]} alt='capa' width='200' />
          <h5>{product.title}</h5>
          <h5>{numberFormatBr(product.price)}</h5>
          <button onClick={() => addProductCart(product)}>add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default App
