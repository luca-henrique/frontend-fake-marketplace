
import { useAppSelector } from '@/hooks/useAppSelector';
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from 'react-router-dom';

export const Header = () => {
  const {count} = useAppSelector((state )=> state.cart)
  
  return(
    <header className="py-4 px-5 md:px-24  lg:px-40 relative w-full border-b border-neutral-900">
      <div className="w-full z-99 flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="lg:text-5xl md:text-4xl text-xl font-semibold text-sky-50">Catalogo de Produtos</h1>
        </Link>
        <div className="flex items-center justify-between">
          <Link className="relative lg:mx-6 md:mx-4 mx-3" to={"/checkout"}>
            <span className="absolute text-sm -top-3 -right-3 p-1 w-6 h-6 text-center leading-none rounded-full text-white bg-orange-300">
              {count}
            </span>
            <CiShoppingBasket className="text-4xl bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md" />
          </Link>
        </div>
      </div>
    </header>
  )
}