import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../breakpoints/breakpoints";

interface LandingProps {
  reversed?: boolean;
  theme?: DefaultTheme;
}

export const LandingContainer = styled.div<LandingProps>`
  position: relative;
  min-height: 100%;
  padding-top: 3em;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Header = styled.header<LandingProps>`
  width: 100%;
  height: auto;
  padding: 0 1.5em;

  @media ${device.tablet} {
    width: 75%;
    margin: 0 auto;
  }

  @media ${device.laptopL} {
    width: 60%;
  }

  h1 {
    text-align: center;
    font-weight: 550;
    letter-spacing: 1.3px;
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).logoFont};

    @media ${device.tablet} {
      font-size: 2.5em;
    }
  }

  h4 {
    margin-top: 3em;
    font-weight: 300;
    text-align: center;
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};

    @media ${device.tablet} {
      font-size: 1.2em;
    }

    @media ${device.laptop} {
      font-weight: 300;
    }

    span {
      font-weight: 900;
    }
  }
`;

export const ButtonsContainer = styled.div<LandingProps>`
  width: 100%;
  height: auto;
  margin-top: 7em;

  @media ${device.mobileL} {
    margin: 9em auto 0 auto;
  }

  @media ${device.tablet} {
    width: 75%;
  }

  @media ${device.laptopL} {
    margin: 11em auto 0 auto;
  }

  p {
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
    margin: 1em 0;
    text-align: center;
    font-size: 0.85em;

    @media ${device.tablet} {
      font-size: 0.9em;
    }
  }
`;

export const StyledButton = styled.button<LandingProps>`
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

export const Footer = styled.footer<LandingProps>`
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 0.75em;
  font-weight: 500;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};

  @media ${device.tablet} {
    font-size: 0.9em;
    bottom: 15px;
  }

  @media ${device.laptopL} {
    bottom: 25px;
  }
`;
