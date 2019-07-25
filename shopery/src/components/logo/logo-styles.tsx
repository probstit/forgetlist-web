import styled, { DefaultTheme } from "styled-components";

import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const StyledLogo = styled.div<ThemeProps>`
  width: 100%;
  height: auto;

  h1 {
    text-align: center;
    font-weight: 550;
    letter-spacing: 1.3px;
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).logoFont};

    @media ${device.tablet} {
      font-size: 2.5em;
    }
  }
`;
