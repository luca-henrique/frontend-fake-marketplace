import { HTMLProps } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {}

export const CheckoutCard = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div
      {...props}
      className={`w-auto bg-black flex flex-col items-center justify-center p-8 border  border-neutral-900 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};
