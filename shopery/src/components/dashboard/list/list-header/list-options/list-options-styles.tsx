import styled from "styled-components";
import ThemeProps from "../../../../../theme/theme-props.interface";

export const ListOptionsWrapper = styled.div<ThemeProps>`
  display: inline-block;
  width: 30%;
  height: auto;
`;

export const IconWrapper = styled.div`
  display: inline-block;
  font-size: 0.9em;
  margin-left: 17%;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
