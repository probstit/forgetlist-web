import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../../../../theme/theme-props.interface";

export const StyledItem = styled.li<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 5px;
  font-size: 0.9em;
  margin-top: 5px;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  p {
    padding-right: 7px;
  }
`;

export const ItemDetails = styled.div<ThemeProps>`
  width: ${props => (props.historyList ? "100%" : "55%")};
  height: auto;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 2px;
  float: left;

  &:hover p {
    text-decoration: ${props => (props.historyList ? "none" : "line-through")};
  }

  &:hover {
    cursor: ${props => (props.historyList ? "default" : "pointer")};
  }
`;

export const ItemOptions = styled.div`
  float: right;
  width: 40%;
  height: auto;
  font-size: 0.9em;
`;
