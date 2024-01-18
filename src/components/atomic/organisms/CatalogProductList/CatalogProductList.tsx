import { CatalogContext, CatalogType } from '@/contexts/ProductContext';
import { ProductType } from '@/types/Product';
import { useContext } from 'react';
import { Product } from '../../molecules/Product/Product';

export const CatalogProductList = () => {
  const { products, addProductCart } = useContext(CatalogContext) as CatalogType;
  return (
    <div className="columns-2">
      {products.map((product: ProductType) => (
        <Product {...product} key={product.id} onClick={() => addProductCart(product)} />
      ))}
    </div>
  )
}