import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../breakpoints/breakpoints";

interface CommonProps {
  reversed?: boolean;
  theme?: DefaultTheme;
}

export const Container = styled.div<CommonProps>`
  position: relative;
  min-height: 100%;
  padding-top: 3em;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled.button<CommonProps>`
  width: 15em;
  height: 25px;
  border: ${props =>
    props.reversed
      ? `1px solid ${(props.theme as DefaultTheme).colors.secondary}`
      : "none"};
  border-radius: 20px;
  display: block;
  margin: 0 auto;
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
