import * as React from "react";
import { ProductType } from "../types/Product";
import { useGetProductsCatalog } from "../hooks/useGetProductsCatalog";
import { useGetCategories } from "../hooks/useGetCategories";
import { Category } from "../types/Category";
import { numberFormatBr } from "../util/numberFormater";


type ChildrenProp = {
  children: React.ReactNode;
};

export type CatalogType = {
  products: ProductType[];
  cart: ProductType[];
  addProductCart: (cart: ProductType) => void;
  categories: Category[];
  totalPriceItemsCartFormated: string;
  totalItemsCartCount: number;
};

export const CatalogContext = React.createContext<CatalogType | null>(null);

const CatalogProvider = ({ children }: ChildrenProp) => {
  const { products } = useGetProductsCatalog();
  const { categories } = useGetCategories();

  const [cart, setCart] = React.useState<ProductType[]>([]);

  const totalItemsCart = cart.reduce((total, item) => total + item.price, 0);

  const totalPriceItemsCartFormated = numberFormatBr(totalItemsCart);
  const totalItemsCartCount = cart.length;

  const addProductCart = (item: ProductType) => {
    setCart((oldItemsCart) => [...oldItemsCart, item]);
  };

  return (
    <CatalogContext.Provider
      value={{
        products,
        cart,
        addProductCart,
        categories,
        totalPriceItemsCartFormated,
        totalItemsCartCount,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
