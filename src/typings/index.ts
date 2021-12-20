export interface IPrice {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
  symbol: string;
}

export interface IPrices {
  [key: string]: IPrice;
}
