import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../theme/theme-props.interface";

export const EditContainer = styled.div<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(169, 169, 169, 0.6);
  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 45% 0;
`;

export const EditForm = styled.form<ThemeProps>`
  width: 90%;
  height: auto;
  padding: 5px 10px;
  vertical-align: middle;
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin: 0 auto;
`;

export const EditHeader = styled.div<ThemeProps>`
  width: 100%;
  height: 30px;
  color: ${props => (props.theme as DefaultTheme).colors.primary};

  div {
    width: 11px;
    height: auto;
    float: right;
    cursor: pointer;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const EditInputWrapper = styled.div<ThemeProps>`
  display: inline-block;
  margin-left: 5px;
  width: ${props => (props.itemName ? "60%" : props.itemQty ? "20%" : "10%")};
  text-align: ${props => (props.itemName ? "left" : "center")};
  height: auto;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  font-size: 0.8em;
`;

export const EditLabel = styled.label<ThemeProps>`
  padding-left: ${props =>
    props.itemName ? "10px" : props.setShare ? "2.3px" : "0"};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
`;

export const EditInput = styled.input<ThemeProps>`
  width: 95%;
  padding: 5px 10px;
  border: none;
  text-align: ${props => (props.itemQty ? "center" : "left")};
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin-top: ${props => (props.setShare ? "8px" : "5px")};
  margin-left: ${props => (props.setShare ? "3px" : "0")};
  cursor: ${props => (props.setShare ? "pointer" : "normal")};
`;

export const EditButton = styled.button<ThemeProps>`
  display: block;
  width: 95%;
  border: none;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  padding: 3px 0;
  margin: 8px auto 0 auto;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
