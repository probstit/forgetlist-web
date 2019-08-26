import React from "react";

// Import components
import Logo from "../logo/Logo";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
// Styled components
import { AppHeaderContainer } from "./app-header-styles";

const AppHeader: React.FC = () => {
  return (
    <AppHeaderContainer>
      <HamburgerMenu />
      <Logo />
    </AppHeaderContainer>
  );
};

export default AppHeader;
