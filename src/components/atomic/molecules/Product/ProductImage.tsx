import { formatterUrlImage } from '../../../../utils/formatterUrlImage'
import { useState } from 'react'

const URL_IMG = 'https://picsum.photos/id/1/400/400'

type ProductImageType = {
  url:string
}

export const ProductImage = ({ url }: ProductImageType) => {
  const [imageErro, setImageErro] = useState(false)
  
  const image = url.length > 1 ? url : URL_IMG
  const productImage = imageErro ? URL_IMG : formatterUrlImage(image)
  

  const onErroImage = () => {
    setImageErro(true)
  }
  
  return(
    <img title='product-image' data-testid='product-image' src={productImage} alt='capa' width='100%' height='340px' onError={() => onErroImage()} className='rounded-sm h-340 container-img' />
  )
}