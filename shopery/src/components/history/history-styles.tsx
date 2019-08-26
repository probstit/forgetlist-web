import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../theme/theme-props.interface";

export const HistoryListHeader = styled.div<ThemeProps>`
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};
`;
