import styled from "styled-components";

export const Root = styled.div`
  cursor: pointer;
`;

export const Element = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  background-color: #ffd486;
  border-bottom: 1px solid #fff;
  &:hover {
    font-weight: bold;
  }
`;

export const DropDownEnter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  background-color: orange;
  border-bottom: 1px solid #fff;
  &:hover {
    font-weight: bold;
  }
`;
