import styled from "styled-components";

import ThemeProps from "../../../../theme/theme-props.interface";

export const ListBodyWrapper = styled.section<ThemeProps>`
  width: 100%;
  height: auto;
  margin-top: ${props => (props.historyList ? "0px" : "10px")};
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

export const FloatedContent = styled.div<ThemeProps>`
  width: ${props => (props.historyList ? "100%" : "55%")};
  height: auto;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 2px;
  padding-top: ${props => (props.historyList ? "5px" : "0")};
  float: left;
`;

export const NameWrapper = styled.p<ThemeProps>`
  float: left;
  width: ${props => (props.historyList ? "77%" : "80%")};
`;

export const QtyWrapper = styled.p<ThemeProps>`
  float: right;
  width: ${props => (props.historyList ? "23%" : "20%")};

  text-align: ${props =>
    props.itemQty || props.historyList ? "center" : "left"};
`;

export const NoItems = styled.p<ThemeProps>`
  font-size: 0.9em;
  text-align: center;
  margin-top: ${props => (props.historyList ? "5px" : "0")};
`;
