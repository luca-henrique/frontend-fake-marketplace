import { Button } from '@/components/ui/button';
import { ProductType } from '@/types/Product'
import { numberFormatBr } from '@/util/numberFormater'
import { textShrink } from '@/util/textShrink';

import "./style.css"
import { ProductImage } from './ProductImage';
import { useNavigate } from 'react-router-dom';

interface ProductTypeProps extends ProductType {
  onClick: () => void
}

export const Product = ({ id, title, price, description, category, images, onClick }: ProductTypeProps) => {
  
  
  const navigate = useNavigate()
  

  const handleDetailProduct = (productId:number) => {
    navigate(`/product-detail/${productId}`)
  }
  
  return(
    <div className="w-[400px] bg-black mb-4 flex flex-col items-center justify-center p-8 border  border-neutral-900 rounded-xl ">
      <ProductImage url={images[0]} />
      <div className='w-full'>
        <h5 className='font-semibold text-xl mb-2 h-auto text-gray-200 mt-2'>{title}</h5>
      </div>
      <div className='w-full'>
        <p className="text-grayshade-100 dark:text-grayshade-50 text-xs text-gray-200">
          {textShrink(description)}
          <button
            className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
            onClick={() => handleDetailProduct(id)}            
          >
            Ler mais
          </button>
        </p>
      </div>
      <div className='w-full mt-2'>
        <p className='text-gray-200 border-gray-500 border w-min p-2 rounded-md'>
          {category.name}
        </p>
      </div>
      <div className='flex flex-row justify-between w-full mt-2 items-center '>
        <h5 className='text-gray-200 text-lg'>{numberFormatBr(price)}</h5>
        <Button onClick={() => onClick()}>add to cart</Button>
      </div>
    </div>
  )
}