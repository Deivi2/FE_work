import React, { ChangeEvent, FC } from "react";
import { Label, Root } from "./styles";

interface IProps {
  type: string;
  label: string;
  name: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<IProps> = (props) => {
  return (
    <Root>
      <Label>{props.label}</Label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        maxLength={20}
      />
    </Root>
  );
};

export default Input;
