import React, { FC } from "react";
import { IPrice } from "typings";
import { toLocaleStringWithCurrency } from "utils/string";
import { Delete, Root } from "./styles";

interface IProps {
  price: IPrice;
  exchangeAmount: string;
  deleteCurrency(currency: string): void;
}

const Amount: FC<IProps> = (props) => {
  const exchangeResult = props.price.rate_float * +props.exchangeAmount;
  const amount = toLocaleStringWithCurrency(exchangeResult, props.price.code);

  const handleDeleteClick = (currency: string) => {
    props.deleteCurrency(currency);
  };

  return (
    <Root>
      <div>{amount}</div>
      <Delete onClick={() => handleDeleteClick(props.price.code)}>X</Delete>
    </Root>
  );
};

export default Amount;
