import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../theme/theme-props.interface";

export const StyledForm = styled.form<ThemeProps>`
  padding: 1em 0.5em;
  text-align: center;
  margin-top: 5em;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};

  .inputError {
    border: 1.2px solid #eb2226;
  }

  div {
    font-size: 0.7em;
    margin-top: 0.2em;
  }
`;

export const StyledInput = styled.input<ThemeProps>`
  width: 15em;
  height: 25px;
  margin-top: 0.7em;
  text-align: center;
  padding: 0.1em 0.3em;
  border: none;
  border-radius: ${props => (props.theme as DefaultTheme).borderRadius};
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
`;

export const StyledP = styled.p`
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  text-align: center;
  font-size: 0.8em;
  margin-top: 120px;
`;

export const StyledLabel = styled.label<ThemeProps>`
  display: block;
  font-size: 0.8em;
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
`;

export const StyledButton = styled.button<ThemeProps>`
  display: block;
  width: 15em;
  height: 25px;
  margin: 1.5em auto 0 auto;
  font-weight: bold;
  border: none;
  border-radius: ${props => (props.theme as DefaultTheme).borderRadius};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};

  &: hover {
    cursor: pointer;
    background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  }
`;
