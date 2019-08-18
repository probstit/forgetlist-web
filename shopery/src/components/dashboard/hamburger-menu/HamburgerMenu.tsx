import React from "react";
// FA Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledMenu } from "./menu-styles";

const HamburgerMenu: React.FC = (): JSX.Element => {
  return (
    <StyledMenu>
      <FontAwesomeIcon icon="bars" />
    </StyledMenu>
  );
};

export default HamburgerMenu;
