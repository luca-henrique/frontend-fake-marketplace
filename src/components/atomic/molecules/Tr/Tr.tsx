import { HTMLProps } from "react";

interface TrProps extends HTMLProps<HTMLTableRowElement> {}

export const Tr = (props: TrProps) => {
  const { className } = props;
  return <tr {...props} className={`border-b border-muted/25 ${className}`}></tr>;
};
