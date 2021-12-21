import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  background-color: #ffd486;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const Delete = styled.div`
  cursor: pointer;
`;
