/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { ProductType } from './types/Product';
import { CatalogContext, CatalogType } from './contexts/ProductContext';
import { numberFormatBr } from './util/numberFormater';


function App() {
  const { totalPriceItemsCartFormated, totalItemsCartCount } = useContext(CatalogContext) as CatalogType;
  return (
    <div>
      <div>
        <h5>Cart:{totalPriceItemsCartFormated}</h5>
        <h5>Total:{totalItemsCartCount}</h5>
      </div>
      <div><input type='search' placeholder='buscar produto' /></div>
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
