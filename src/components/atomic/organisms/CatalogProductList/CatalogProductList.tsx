import { ProductType } from '@/types/Product';
import { useEffect, useState } from 'react';
import { Product } from '../../molecules/Product/Product';
import ProductDetail from '../ProductDetail/ProductDetail';
import Modal from 'react-modal';

import { readProductsRequest } from '@/store/reducer/product/actions';
import { addProductCart } from '@/store/reducer/cart/actions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding:"0px !important"
  },
};

export const CatalogProductList = () => {
  const {data} = useAppSelector((state) => state.product)
  
  const [visibleModalDetail, setVisibleModalDetail] = useState(false);
  const [product,setProduct] = useState<ProductType | undefined>()
  
  function handleOpenDetailProduct(item:ProductType) {
    setVisibleModalDetail(true);
    setProduct(item)
  }

  function closeModal() {
    setVisibleModalDetail(false);
  }
  
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(readProductsRequest())
  },[])
  
  return (
    <div className="columns-2 mt-10">
      {data.map((product: ProductType) => (
        <Product {...product} key={product.id} onClick={() => dispatch(addProductCart(product))} handleOpenDetailProduct={() => handleOpenDetailProduct(product)} />
      ))}
      
      <Modal
        isOpen={visibleModalDetail}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ProductDetail product={product} onClose={closeModal} />
      </Modal>
    
    </div>
  )
}