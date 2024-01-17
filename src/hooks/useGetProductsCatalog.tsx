import { useEffect, useState } from 'react';
import { ProductType } from '../types/Product';

export const useGetProductsCatalog = () => {
  
  const [products, setProducts] = useState<ProductType[]>([]);
  
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories/1/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);
  
  return { products }
}