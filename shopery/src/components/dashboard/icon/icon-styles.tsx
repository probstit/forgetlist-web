import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../theme/theme-props.interface";

export const IconWrapper = styled.div<ThemeProps>`
  display: inline-block;
  width: ${props =>
    props.liOption ? "20%" : props.footer ? "33.33%" : "20px"};
  font-size: ${props =>
    props.footer ? "1.3em" : props.liOption ? "1em" : "0.8em"};
  color: ${props =>
    props.footer
      ? (props.theme as DefaultTheme).colors.secondary
      : props.trash
      ? "#DC143C"
      : (props.theme as DefaultTheme).colors.primary};
  text-align: center;
  line-height: ${props => (props.footer ? "50px" : "0px")};
  margin-left: ${props => (props.liOption ? "5px" : "0")};
  & :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
