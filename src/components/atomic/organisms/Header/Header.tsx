import { useAppSelector } from "@/hooks/useAppSelector";
import { useMemo } from "react";
import { CiHome, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { InputWithDebounce } from '../../atom';
import { useSearchProduct } from '@/hooks/useSearchProduct';

type Props = {
  title: string;
};
export const Header = ({ title }: Props) => {
  const { data } = useAppSelector((state) => state.cart);
   const {setInputSearch} = useSearchProduct();
  
  const quantity = useMemo(() => {
    if (data?.length === 0) return 0;
    return data
      ?.map((product) => product.countProduct)
      ?.reduce((acc, curr) => acc + curr);
  }, [data]);

  return (
    <header className='l-header'>
      <InputWithDebounce onChange={setInputSearch} />
      <div>
        <Link to={'/'}>
          <CiHome />
        </Link>
        <Link to={'/checkout'}>
          <span>{quantity}</span>
          <CiShoppingBasket />
        </Link>
      </div>
    </header>
  );
};
