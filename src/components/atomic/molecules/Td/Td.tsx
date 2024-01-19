import { HTMLProps } from "react";

interface TdProps extends HTMLProps<HTMLTableCellElement> {}

export const Td = (props: TdProps) => {
  const { className } = props;
  return <td {...props} className={`text-white p-4 text-center align-middle font-medium text-xs sm:text-base ${className}`}></td>;
};
