import React, { ChangeEvent, useState } from "react";
import { CurrencyAmountDisplay, DropDownToAddPrice, Input } from "components";
import { Root } from "./styles";
import { Prices } from "hooks";

const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState<string>("");
  const { prices, deletedPrices, deletePrice, addPrice } = Prices();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setExchangeAmount(event.target.value);
  };

  return (
    <Root>
      <Input
        type={"text"}
        label={"Bitcoin amount"}
        name={"btc"}
        onChange={handleInput}
      />
      <CurrencyAmountDisplay
        exchangeAmount={exchangeAmount}
        prices={prices}
        deletePrice={deletePrice}
      />
      <DropDownToAddPrice addPrice={addPrice} deletedPrices={deletedPrices} />
    </Root>
  );
};

export default Form;
