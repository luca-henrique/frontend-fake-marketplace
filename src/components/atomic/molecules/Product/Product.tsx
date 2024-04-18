import './style.css';
import {ProductImage} from './ProductImage';
import {ProductType} from '@/types/Product';
import {textShrink} from '@/utils/textShrink';
import {priceFormatterCurrencyBr} from '@/utils';
import {Button} from '@/components/ui/button';

interface ProductTypeProps extends ProductType {
  onClick: () => void;
  handleOpenDetailProduct?: () => void;
}

export const Product = ({
  title,
  price,
  description,
  category,
  images,
  onClick,
  handleOpenDetailProduct,
}: ProductTypeProps) => {
  return (
    <div>
      <button onClick={handleOpenDetailProduct}>
        <ProductImage url={images[0]} />
      </button>
      <h5>{title}</h5>
      <p>
        {textShrink(description)}
        <button onClick={handleOpenDetailProduct}>Ler mais</button>
      </p>
      <p>{category.name}</p>
      <div>
        <h5>{priceFormatterCurrencyBr(price)}</h5>
        <button onClick={() => onClick()}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};
