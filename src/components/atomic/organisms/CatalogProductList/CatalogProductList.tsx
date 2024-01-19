import { ProductType } from '@/types/Product';
import { useEffect, useState } from 'react';
import { Product } from '../../molecules/Product/Product';
import ProductDetail from '../ProductDetail/ProductDetail';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { readProductsRequest } from '@/store/reducer/product/actions';
import { addProductCart } from '@/store/reducer/cart/actions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const customStyles = {
  overlay: {
    backgroundColor: 'transparent',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding:"0px !important",
    transform: 'translate(-50%, -50%)',
    maxWidth: '900px',
  },
};

export const CatalogProductList = () => {
  const {data} = useAppSelector((state) => state.product)
  const [visibleModalDetail, setVisibleModalDetail] = useState(false);
  const [product,setProduct] = useState<ProductType>({} as ProductType);
  const dispatch = useAppDispatch();
  
  const notify = () => toast.success('Produto adicionado no carrinho de compras', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  function handleOpenDetailProduct(item:ProductType) {
    setVisibleModalDetail(true);
    setProduct(item)
  }

  function closeModal() {
    setVisibleModalDetail(false);
  }
  
  const handleAddProduct = (product:ProductType) => {
    dispatch(addProductCart(product));
    notify()
  }
  
  useEffect(()=> {
    dispatch(readProductsRequest())
  },[])
  
  return (
    <div className="flex flex-row flex-wrap mt-10 gap-8 ">
      {data.map((product: ProductType) => (
        <Product {...product} key={product.id} onClick={() => handleAddProduct(product)} handleOpenDetailProduct={() => handleOpenDetailProduct(product)} />
      ))}
      
      <Modal
        contentLabel="Product"
        style={customStyles}
        isOpen={visibleModalDetail}
        onRequestClose={closeModal}
      >
        <ProductDetail product={product} onClose={closeModal} />
      </Modal>
    
    </div>
  )
}