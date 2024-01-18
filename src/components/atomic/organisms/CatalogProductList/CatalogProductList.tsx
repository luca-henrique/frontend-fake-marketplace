import { ProductType } from '@/types/Product';
import { useEffect } from 'react';
import { Product } from '../../molecules/Product/Product';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { readProductsRequest } from '@/store/reducer/product/actions';
import { addProductCart } from '@/store/reducer/cart/actions';

export const CatalogProductList = () => {
  const {data} = useSelector((state) => state.product)
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(readProductsRequest())
  },[])
  
  return (
    <div className="columns-2">
      
      {data.map((product: ProductType) => (
        <Product {...product} key={product.id} onClick={() => dispatch(addProductCart(product))} />
      ))}
    </div>
  )
}