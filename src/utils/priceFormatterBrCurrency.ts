export const priceFormatterCurrencyBr = (price:number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const priceFormated = formatter.format(price)
  return priceFormated
} 