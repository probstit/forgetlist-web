import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../../theme/theme-props.interface";

export const StyledListItem = styled.li<ThemeProps>`
  width: 100%;
  height: 25px;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin-top: 5px;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:hover p {
    text-decoration: line-through;
  }
`;
