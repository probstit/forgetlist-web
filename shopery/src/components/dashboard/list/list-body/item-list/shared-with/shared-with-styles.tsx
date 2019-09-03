import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../../../theme/theme-props.interface";

export const SharedWithContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  margin-top: 5px;
  padding: 7px 0;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
`;

export const Title = styled.h6<ThemeProps>`
  text-align: center;
  font-size: 0.75em;
  padding-bottom: 3px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.secondary};
`;

export const Users = styled.ul<ThemeProps>`
  width: 100%;
  height: auto;
  list-style-type: none;
  margin-top: 7px;
  padding: 0px 7px;
`;
