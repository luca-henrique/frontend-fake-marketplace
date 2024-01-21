import { useAppSelector } from "@/hooks/useAppSelector";
import { useMemo } from "react";
import { CiHome, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};
export const Header = ({ title }: Props) => {
  const { data } = useAppSelector((state) => state.cart);
  
  const quantity = useMemo(() => {
    if (data?.length === 0) return 0;
    return data
      ?.map((product) => product.countProduct)
      ?.reduce((acc, curr) => acc + curr);
  }, [data]);

  return (
    <header className="py-6 px-4 md:px-22 lg:px-36 relative w-full border-b border-neutral-900">
      <div className="w-full z-99 flex items-center justify-between">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold">
          {title}
        </h1>
        <div className="flex items-center justify-between">
          <Link className="relative lg:mx-6 md:mx-4 mx-3" to={"/"}>
            <CiHome className="text-4xl dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md" />
          </Link>
          <Link className="relative lg:mx-6 md:mx-4 mx-3" to={"/checkout"}>
            <span className="absolute text-sm -top-3 -right-3 p-1 w-6 h-6 text-center leading-none rounded-full bg-orange-300">
              {quantity}
            </span>
            <CiShoppingBasket className="text-4xl dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md" />
          </Link>
        </div>
      </div>
    </header>
  );
};
