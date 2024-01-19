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
import { removeProductCart } from "@/store/reducer/cart/actions";
import { ProductCart } from "@/store/reducer/cart/types";
import { numberFormatBr } from "@/util/numberFormater";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export interface AddProductProps {
  id: number;
  type: AddType;
}

export const Checkout = () => {
  const { data } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    if (data?.length === 0) return 0;
    data
      ?.map((product) => product.price * product.countProduct)
      ?.reduce((acc, curr) => acc + curr);
  }, [data]);

  const quantity = useMemo(() => {
    if (data?.length === 0) return 0;
    data
      ?.map((product) => product.countProduct)
      ?.reduce((acc, curr) => acc + curr);
  }, [data]);

  return (
    <div className="bg-black flex gap-2">
      <CheckoutCard className="flex-1">
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
                <Td>{item?.price}</Td>
                <Td>
                  <CheckoutQuantity
                    quantity={item?.countProduct}
                    onAddProduct={(type: AddType) =>
                      dispatch(removeProductCart({ id: item?.id, type }))
                    }
                  />
                </Td>
                <Td>{numberFormatBr(item?.price * 1)}</Td>
              </Tr>
            ))}
          </tbody>
        </CheckoutTable>
      </CheckoutCard>
      <CheckoutCard className="flex-1">
        <div>
          <p>Total do pedido: {numberFormatBr(total || 0)}</p>
          <p>Quantidade de produtos: {quantity}</p>
          <Button>CHECKOUT</Button>
        </div>
      </CheckoutCard>
    </div>
  );
};
