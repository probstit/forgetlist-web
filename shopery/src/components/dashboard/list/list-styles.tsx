import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../theme/theme-props.interface";

export const ListWrapper = styled.section<ThemeProps>`
  width: 100%;
  height: auto;
  margin-top: 15px;
  padding-bottom: 5px;
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
`;
