export const toLocaleStringWithCurrency = (
  value: number,
  currencyCode: string
) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
