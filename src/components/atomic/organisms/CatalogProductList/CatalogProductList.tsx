import { ProductType } from '@/types/Product';
import { useEffect } from 'react';
import { Product } from '../../molecules/Product/Product';

import { readProductsRequest } from '@/store/reducer/product/actions';
import { addProductCart } from '@/store/reducer/cart/actions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

export const CatalogProductList = () => {
  const {data} = useAppSelector((state) => state.product)
  
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(readProductsRequest())
  },[])
  
  return (
    <div className="columns-2 mt-10">
      {data.map((product: ProductType) => (
        <Product {...product} key={product.id} onClick={() => dispatch(addProductCart(product))} />
      ))}
    </div>
  )
}