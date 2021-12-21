import { Oval } from "components/common";
import React, { FC, useState } from "react";
import { IPrice } from "typings";
import { DropDownEnter, Element, Root } from "./styles";

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

  const dropDownEnter = () => (
    <DropDownEnter>
      <div>{openDropDown ? "🡇 Close" : "🡅 Open"}</div>
      <Oval width={20} height={20}>
        {prices.length}
      </Oval>
    </DropDownEnter>
  );

  return (
    <Root onClick={() => setOpenDropDown(!openDropDown)}>
      {dropDownEnter()}
      {openDropDown && (
        <div>
          {prices.map((value, i) => (
            <Element
              key={`drop-down-element-${i}`}
              onClick={() => handleAddPrice(value.code)}
            >
              <div>{value.code}</div>
              <div>Add</div>
            </Element>
          ))}
        </div>
      )}
    </Root>
  );
};

export default DropDownToAddPrice;
