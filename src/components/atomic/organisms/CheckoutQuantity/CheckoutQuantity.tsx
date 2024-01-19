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
      <span className="py-1 px-2 border  border-neutral-900 rounded-md">
        {quantity}
      </span>
      <Button className="bg-red-400" onClick={() => onAddProduct("-")}>
        -
      </Button>
    </div>
  );
};
