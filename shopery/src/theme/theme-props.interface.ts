import { DefaultTheme } from "styled-components";

export default interface ThemeProps {
  theme?: DefaultTheme;
  reversed?: boolean;
  styleError?: boolean;
  formButton?: boolean;
  recover?: boolean;
}
