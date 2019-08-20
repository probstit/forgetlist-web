import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../theme/theme-props.interface";

export const DashboardHeader = styled.nav<ThemeProps>`
  width: 100%;
  height: 50px;
  padding: 5px 15px;
  position: fixed;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
`;

export const DashboardWrapper = styled.main<ThemeProps>`
  padding: 50px 10px 0 10px;
  overflow-y: scroll;
  height: auto;
  width: 100%;
`;

export const DashboardNav = styled.footer<ThemeProps>`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
`;
