import { ProductType } from '@/types/Product';
import './style.css';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addProductCart } from '@/store/reducer/cart/actions';

interface ProductDetailProps {
  product?: ProductType;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const { id, title, price, description, images, category } = product;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };
  
  const dispatch = useAppDispatch()
  const addItemProductCart = () => {
    dispatch(addProductCart(product))
  }
  
  
  return (
    <div className="bg-gray-900 container-detail">
      <button className="rounded-full bg-gray-200 text-gray-700 border-1 border-gray-400 px-4 py-2 absolute top-4 right-4">
        Back
      </button>
      <div className="flex gap-4 md:gap-32 items-center p-4 md:p-20 mx-auto text-white">
        <ul className="flex flex-col gap-4 md:gap-7 h-[100%]">
          {images.map((image, index) => (
            <li key={index}>
              <img
                onClick={() => handleThumbnailClick(image)}
                className={`rounded-md w-[90px] h-[90px] cursor-pointer ${
                  selectedImage === image
                    ? 'border border-gray-500 opacity-50'
                    : ''
                } max-w-full`}
                src={image}
                alt={`Thumbnail ${index + 1}`}
              />
            </li>
          ))}
        </ul>

        <div className="w-[50%] mx-auto">
          <img
            src={selectedImage}
            alt='list-image'
            className="w-full h-auto rounded-md w-[330px] h-auto mx-auto md:mx-0"
          />
        </div>

        <div className="flex flex-col gap-30 w-1/2 text-white">
          <div>
            <h2 className="text-[20px] font-bold mb-6 ">{title}</h2>

            <button className="rounded-full bg-gray-200 text-gray-700 border-1 border-gray-400 px-4 py-1">
              {category.name}
            </button>
          </div>

          <p className="my-6">Descrição: {description}</p>
          <div className="flex justify-between items-center text-white">
            <div>
              <p className="">Preço</p>
              <p className="text-xl font-bold">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price)}
              </p>
            </div>

            <button className="bg-purple-700 text-white px-3 py-1 rounded-md" onClick={() => addItemProductCart()}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
