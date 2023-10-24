export const priceCalculation = (price: number, currency: string) => {
  return Number((price * Number(currency)).toFixed(2));
};
