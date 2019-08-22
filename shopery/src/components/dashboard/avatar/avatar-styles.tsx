import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../../theme/theme-props.interface";

export const UserDetails = styled.div<ThemeProps>`
  width 75%;
  display: inline-block;
  height: 30px;
  padding-left: 2px;
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
