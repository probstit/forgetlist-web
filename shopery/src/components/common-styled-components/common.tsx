import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const Container = styled.div<ThemeProps>`
  position: relative;
  min-height: 100%;
  padding-top: 3em;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
`;

export const StyledLink = styled(Link)<ThemeProps>`
  text-decoration: none;
  color: ${props => (props.theme as DefaultTheme).colors.secondary};

  &:hover {
    cursor: pointer;
  }
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
  margin: 0 auto 0.3em auto;
  vertical-align: middle;
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
  }

  @media ${device.tablet} {
    width: 15em;
    height: 30px;
    font-size: 1em;
  }
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

  button {
    margin-top: 2em;
    font-weight: 600;
  }

  p {
    text-align: center;
    font-size: 0.6em;
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};

    &: hover {
      text-decoration: underline;
    }
  }
`;

export const StyledForm = styled.form<ThemeProps>`
  text-align: center
  font-size: 0.7em;
  padding: 1.5em;
  margin-top: 2em;
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
`;

export const StyledInput = styled.input<ThemeProps>`
  width: 15em;
  height: 25px;
  text-align: center;
  vertical-align: middle;
  padding: 2.5px 2px;
  margin: 0.2em 0 1em 0;
  border-style: none;
  border-radius: ${props => (props.theme as DefaultTheme).borderRadius};
`;
