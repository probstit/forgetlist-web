import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../../../theme/theme-props.interface";

export const StyledItemList = styled.ul`
  width: 100%;
  height: auto;
  list-style-type: none;
`;

export const Item = styled.li<ThemeProps>`
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

export const ItemOptions = styled.div`
  float: right;
  width: 44%;
  height: auto;
  font-size: 0.9em;
  padding-left: 0.9%;
`;
