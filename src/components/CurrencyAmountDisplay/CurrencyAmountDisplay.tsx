import React, { FC } from "react";
import { Amount } from "./Amount";
import { IPrice } from "typings";

interface IProps {
  exchangeAmount: string;
  prices: Array<IPrice>;
  deletePrice(currency: string): void;
}

const CurrencyAmountDisplay: FC<IProps> = (props) => {
  const deleteCurrency = (currency: string) => {
    props.deletePrice(currency);
  };

  return (
    <div>
      {props.prices?.map((price, i) => (
        <Amount
          key={`amount-${i}`}
          price={price}
          exchangeAmount={props.exchangeAmount}
          deleteCurrency={deleteCurrency}
        />
      ))}
    </div>
  );
};

export default CurrencyAmountDisplay;
