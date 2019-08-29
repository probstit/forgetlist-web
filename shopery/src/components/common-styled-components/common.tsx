import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const Container = styled.div<ThemeProps>`
  position: relative;
  min-height: 100%;
  padding-top: ${props => (props.dashboard ? "0" : "3em")};
  background-color: ${props =>
    props.dashboard
      ? (props.theme as DefaultTheme).colors.tertiary
      : (props.theme as DefaultTheme).colors.primary};
`;

export const FormContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 1.5em;

  h2 {
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
    text-align: center;
    font-weight: 450;
  }

  hr {
    width: 5em;
    margin: 0.2em auto 0 auto;
    border: 0.2px solid
      ${props => (props.theme as DefaultTheme).colors.secondary};
    background-color: ${props =>
      (props.theme as DefaultTheme).colors.secondary};
  }
`;

export const StyledForm = styled.form<ThemeProps>`
  text-align: ${props => (props.listHeader ? "left" : "center")};
  font-size: 0.7em;
  padding: 0 ${props => (props.listHeader ? "0 0 0" : "1.5em 1.5em 1.5em")};
  margin-top: ${props => (props.recover ? "9em" : "2em")};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  & ::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const StyledLabel = styled.label<ThemeProps>`
  display: "block"
  width: 100%;
  font-size: 1em;
  color: ${props =>
    props.listHeader
      ? (props.theme as DefaultTheme).colors.primary
      : (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  margin: 0.5em 0 0.2em 0;
`;

export const StyledInput = styled.input<ThemeProps>`
  width: 15em;
  height: 25px;
  display: ${props => (props.listHeader ? "inline-block" : "block")};
  margin: 0 auto 0 auto;
  text-align: center;
  padding: 0 ${props => (props.listHeader ? "10px" : "5px")};
  border: ${props => (props.styleError ? "1.2px solid #ee0000" : "none")};
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props => (props.theme as DefaultTheme).borderRadius};
`;

export const StyledButton = styled.button<ThemeProps>`
  width: 15em;
  height: 25px;
  border: ${props =>
    props.reversed
      ? `1px solid ${(props.theme as DefaultTheme).colors.secondary}`
      : "none"};
  border-radius: 20px;
  display: block;
  margin: ${props =>
    props.formButton ? "1.5em auto 0 auto" : "0 auto 0.3em auto"};
  vertical-align: middle;
  font-weight: bold;
  font-weight: ${props => (props.reversed ? "450" : "600")};
  background-color: ${props =>
    props.reversed
      ? (props.theme as DefaultTheme).colors.primary
      : (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props =>
    props.reversed
      ? (props.theme as DefaultTheme).colors.secondary
      : (props.theme as DefaultTheme).colors.primary};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    width: 15em;
    height: 30px;
    font-size: 1em;
  }
`;

/* This component will display after server responds to the request */
export const ResponseMessage = styled.p<ThemeProps>`
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  text-align: center;
  font-size: 0.8em;
  margin-top: 120px;
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)<ThemeProps>`
  text-decoration: none;
  color: ${props => (props.theme as DefaultTheme).colors.secondary};

  p {
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
    font-size: 0.65em;
    text-align: center;
    margin-top: 0.2em;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const StyledFormError = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  color: #ee0000;
  text-align: ${props =>
    props.itemForm || props.editForm || props.friendForm ? "left" : "center"};
  padding-left: ${props => (props.friendForm ? "10px" : "0")};
  margin-top: ${props => (props.friendForm ? "5px" : "0")};

  p {
    font-weight: 600;
    font-size: 10px;
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  }
`;
// This component will style and encapsulate spinner animation
export const LoadingAnimation = styled.div<ThemeProps>`
  margin-top: 1.5em;
  font-size: 1.5em;
`;

export const ErrorsContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  clear: both;
`;

export const Wrapper = styled.section<ThemeProps>`
  padding: 50px 10px;
  overflow-y: scroll;
  height: auto;
  width: 100%;
`;

export const Overlay = styled.div<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(175, 175, 175, 0.6);
  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 45% 0;
`;
