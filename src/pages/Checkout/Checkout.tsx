import { PageLayout } from "@/components/atomic/layout/HomeLayout";
import { CheckoutCard } from "@/components/atomic/molecules/Card/CheckoutCard";
import { Td } from "@/components/atomic/molecules/Td/Td";
import { Th } from "@/components/atomic/molecules/Th/Th";
import { Tr } from "@/components/atomic/molecules/Tr/Tr";
import {
  AddType,
  CheckoutQuantity,
} from "@/components/atomic/organisms/CheckoutQuantity/CheckoutQuantity";
import { CheckoutTable } from "@/components/atomic/organisms/Table/Table";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/useAppSelector";
import { clearCart, removeProductCart } from "@/store/reducer/cart/actions";
import { ProductCart } from "@/store/reducer/cart/types";
import { numberFormatBr } from "@/util/numberFormater";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export interface AddProductProps {
  id: number;
  type: AddType;
}

export const Checkout = () => {
  const { data, count, total } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (data?.length === 0) {
    return (
      <PageLayout title="Checkout">
        <div className="text-white flex flex-col items-center">
          <CiShoppingCart className="text-9xl p-1 rounded-md" />
          <span className="text-xl">
            Seu carrinho está vázio vá até o <Link className="text-purple-700" to="/">catalogo</Link>{" "}
            adicionar items!
          </span>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Checkout">
      <div className="flex flex-col sm:flex-row gap-2">
        <CheckoutCard className="block sm:flex sm:justify-center flex-1 overflow-x-auto">
          <CheckoutTable>
            <thead>
              <Tr>
                <Th style={{ textAlign: "left" }}>Produto</Th>
                <Th>Preço</Th>
                <Th>Quantidade</Th>
                <Th>Subtotal</Th>
              </Tr>
            </thead>
            <tbody>
              {data?.map((item: ProductCart, index: number) => (
                <Tr key={`${index}-${item?.id}`}>
                  <Td style={{ textAlign: "left" }}>{item?.title}</Td>
                  <Td>{numberFormatBr(item?.price)}</Td>
                  <Td>
                    <CheckoutQuantity
                      quantity={item?.countProduct}
                      onAddProduct={(type: AddType) =>
                        dispatch(removeProductCart({ id: item?.id, type }))
                      }
                    />
                  </Td>
                  <Td>{numberFormatBr(item?.price * item?.countProduct)}</Td>
                </Tr>
              ))}
            </tbody>
          </CheckoutTable>
        </CheckoutCard>
        <CheckoutCard className="text-white">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p>Valor Total do Pedido:</p>
              <p className='font-bold text-xl'>{numberFormatBr(total || 0)}</p>
              <p className='mt-4'>Quantidade de produtos: {count || 0}</p>
            </div>
            <Button className="mt-8" onClick={() => dispatch(clearCart())}>CHECKOUT</Button>
          </div>
        </CheckoutCard>
      </div>
    </PageLayout>
  );
};
