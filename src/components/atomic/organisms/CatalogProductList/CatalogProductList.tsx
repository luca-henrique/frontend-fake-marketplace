import { CatalogContext, CatalogType } from '@/contexts/ProductContext';
import { ProductType } from '@/types/Product';
import { useContext, useState } from 'react';
import { Product } from '../../molecules/Product/Product';
import ProductDetail from '../ProductDetail/ProductDetail';


export const CatalogProductList = () => {
  const { products, addProductCart } = useContext(CatalogContext) as CatalogType;
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    console.log(selectedProduct)
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleModal = (product: ProductType) => {
    addProductCart(product);
    openModal(product);
    
  };
  return (
    <div className="columns-2">
        {selectedProduct && (
        <ProductDetail product={selectedProduct as ProductType} onClose={closeModal} />
      )}
      {products.map((product: ProductType) => (
        <div key={product.id} onClick={() => handleModal(product)}>
          <Product {...product}  onClick={() => addProductCart(product)} />
        </div>
      ))}
    
    </div>
  )
}