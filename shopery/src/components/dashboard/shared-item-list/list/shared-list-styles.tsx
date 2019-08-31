import styled from "styled-components";
import ThemeProps from "../../../../theme/theme-props.interface";

export const StyledList = styled.ul<ThemeProps>`
  list-style: none;
  width: 100%;
  height: auto;
`;

export const StyledListContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  font-size: 0.8em;
  font-weight: 600;
  padding: 0 ${props => (props.listHeader ? "8px" : "0")};
`;

export const StyledP = styled.p<ThemeProps>`
  display: inline-block;
  width: 45%;
  text-align: ${props => (props.shared ? "right" : "left")};
`;

export const Qty = styled.p<ThemeProps>`
  display: inline-block;
  width: 10%;
  text-align: ${props => (props.itemQty ? "center" : "left")};
`;
