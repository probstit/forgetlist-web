import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../theme/theme-props.interface";

export const IconWrapper = styled.div<ThemeProps>`
  display: inline-block;
  width: 33.33%;
  font-size: ${props => (props.footer ? "1.3em" : "0.8em")};
  color: ${props =>
    props.footer
      ? (props.theme as DefaultTheme).colors.secondary
      : (props.theme as DefaultTheme).colors.primary};
  text-align: center;
  line-height: 50px;

  & :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
