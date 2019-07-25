import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../theme/theme-props.interface";
import { device } from "../../breakpoints/breakpoints";

export const RegisterContainer = styled.div<ThemeProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
`;
