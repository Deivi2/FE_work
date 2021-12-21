import styled from "styled-components";

interface IProps {
  width: number;
  height: number;
  color?: string;
}

export const Root = styled.div<IProps>`
  background-color: ${(props) => props.color || "#000"};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50%;
  color: #fff;
`;
