import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../theme/theme-props.interface";

export const AppNavContainer = styled.nav<ThemeProps>`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  z-index: 3;
`;
