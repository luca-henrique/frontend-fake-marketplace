import { HTMLProps } from "react";

interface ThProps extends HTMLProps<HTMLTableCellElement> {}

export const Th = (props: ThProps) => {
  const { className } = props;
  return <th {...props} className={`text-muted-foreground p-4 text-center align-middle font-medium ${className}`}></th>;
};
