import styled from "styled-components";

export const ListBodyWrapper = styled.section`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 0px 9px 5px 9px;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const ListBodyHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 0 5px;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const FloatedContent = styled.div`
  width: 55%;
  height: auto;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 2px;
  float: left;
`;

export const NameWrapper = styled.p`
  float: left;
`;

export const QtyWrapper = styled.p`
  float: right;
`;

export const NoItems = styled.p`
  text-align: center;
`;
