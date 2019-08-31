import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../theme/theme-props.interface";

export const SharedListHeader = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 10px 14px;
  text-align: left;
  font-size: 0.85em;
  font-weight: 600;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};
`;
