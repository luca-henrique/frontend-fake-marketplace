import { formatterUrlImage } from '@/util/formatterUrlImage'
import { useState } from 'react'

const URL_IMG = 'https://picsum.photos/id/1/400/400'

type ProductImageType = {
  url:string
}

export const ProductImage = ({ url }: ProductImageType) => {
  const [imageErro, setImageErro] = useState(false)
  const productImage = imageErro ? URL_IMG : formatterUrlImage(url)

  const onErroImage = () => {
    setImageErro(true)
  }
  
  return(
    <img title='product-image' src={productImage} alt='capa' width='100%' height='340px' onError={() => onErroImage()} className='rounded-sm h-340 container-img' />
  )
}