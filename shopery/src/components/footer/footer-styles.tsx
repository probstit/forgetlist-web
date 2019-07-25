import styled, { DefaultTheme } from "styled-components";

import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const StyledFooter = styled.footer<ThemeProps>`
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 0.75em;
  font-weight: 500;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};

  @media ${device.tablet} {
    font-size: 0.9em;
    bottom: 15px;
  }

  @media ${device.laptopL} {
    bottom: 25px;
  }
`;
