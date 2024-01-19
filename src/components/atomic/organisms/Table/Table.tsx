import { HTMLProps } from "react";

interface TableProps extends HTMLProps<HTMLTableElement> {}

export const CheckoutTable = (props: TableProps) => {
  const { className } = props;
  return <table {...props} className={`${className}`}></table>;
};
