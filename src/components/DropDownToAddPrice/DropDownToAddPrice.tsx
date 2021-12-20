import React, { FC, useState } from "react";
import { IPrice } from "typings";
import { Element, Root } from "./styles";

interface IProps {
  addPrice(currency: string): void;
  deletedPrices: Array<IPrice>;
}

const DropDownToAddPrice: FC<IProps> = (props) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleAddPrice = (currency: string) => {
    props.addPrice(currency);
  };

  const prices = props.deletedPrices;

  if (!prices.some(Boolean)) return <></>;

  return (
    <Root onClick={() => setOpenDropDown(!openDropDown)}>
      {openDropDown ? <div>{"Close"}</div> : <div>{"Open"}</div>}
      {openDropDown && (
        <div>
          {prices.map((value, i) => (
            <Element
              key={`drop-down-element-${i}`}
              onClick={() => handleAddPrice(value.code)}
            >
              <div>Add</div>
              <div>{value.code}</div>
            </Element>
          ))}
        </div>
      )}
    </Root>
  );
};

export default DropDownToAddPrice;
