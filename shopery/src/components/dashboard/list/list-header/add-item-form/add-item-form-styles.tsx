import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../../../theme/theme-props.interface";

export const InputWrapper = styled.div<ThemeProps>`
  float: left;
  width: ${props => (props.itemName ? "65%" : props.shareItem ? "15%" : "20%")};
  margin-bottom: 10px;

  & ::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const ListItemLabel = styled.label<ThemeProps>`
  display: block;
  font-size: 1.1em;
  margin-bottom: ${props => (props.shareItem ? "10px" : "5px")};
  margin-left: ${props => (props.shareItem ? "1.5px" : "0")};
  padding-left: ${props => (props.itemName ? "10px" : "15px")};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
`;

export const ListItemInput = styled.input<ThemeProps>`
  display: block;
  width: ${props => (props.itemName ? "90%" : "55px")};
  text-align: ${props => (props.itemName ? "left" : "center")};
  border: none;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  padding: 5px 10px;
  margin: ${props => (props.shareItem ? "0 auto" : "0 5px 0 0")};
  margin-right: 5px;
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
`;

export const AddButton = styled.button<ThemeProps>`
  width: 100%;
  padding: 5px 10px;
  display: block;
  text-align: center;
  border: none;
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};

  &:hover {
    opacity: 0.9
    cursor: pointer;
  }
`;
