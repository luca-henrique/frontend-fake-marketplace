import { Button } from "@/components/ui/button";
import { HTMLProps } from "react";

export type AddType = "+" | "-";

interface CheckoutQuantityProps extends HTMLProps<HTMLDivElement> {
  quantity: number;
  onAddProduct: (type: AddType) => void;
}

export const CheckoutQuantity = (props: CheckoutQuantityProps) => {
  const { quantity, className, onAddProduct } = props;
  return (
    <div {...props} className={`flex gap-1 ${className}`}>
      <Button className="bg-violet-800" onClick={() => onAddProduct("+")}>
        +
      </Button>
      <span className="py-2 px-4 border  border-neutral-900 rounded-md self-center">
        {quantity}
      </span>
      <Button className="bg-red-400" onClick={() => onAddProduct("-")}>
        -
      </Button>
    </div>
  );
};
