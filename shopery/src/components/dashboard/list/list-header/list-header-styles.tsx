import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../../theme/theme-props.interface";

export const StyledListHeader = styled.div<ThemeProps>`
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};
`;

export const UserDetails = styled.div<ThemeProps>`
  width: 70%;
  display: inline-block;
  height: auto;
  padding-top: 5px;
`;

export const StyledUserAvatar = styled.div<ThemeProps>`
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 100%;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  text-align: center;
  line-height: 30px;
  font-weight: bold;
`;

export const StyledUserName = styled.p<ThemeProps>`
  font-size: 0.8em;
  display: inline-block;
  margin-left: 8px;
  font-weight: bold;
`;

export const ListOptionsWrapper = styled.div<ThemeProps>`
  display: inline-block;
  width: 30%;
  height: auto;
`;
