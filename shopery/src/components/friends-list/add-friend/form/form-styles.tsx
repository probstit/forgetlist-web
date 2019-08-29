import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../theme/theme-props.interface";

export const AddFriendForm = styled.form<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 10px 10px 0px 10px;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const FriendInput = styled.input<ThemeProps>`
  width: 85%;
  height: 25px;
  display: inline-block;
  padding: 0 10px;
  background: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props => (props.theme as DefaultTheme).borderRadius};
  border: ${props => (props.styleError ? "1.2px solid #ee0000" : "none")};
`;

export const FriendIconWrapper = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 100%;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  float: right;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
