import React from "react";
// Import styled components
import { IconWrapper } from "./icon-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ThemeProps from "../../../theme/theme-props.interface";

interface FAIcon extends ThemeProps {
  icon: IconProp;
}

const FooterIcon: React.SFC<FAIcon> = (props): JSX.Element => {
  return (
    <>
      {props.footer ? (
        <IconWrapper footer>
          <FontAwesomeIcon icon={props.icon} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <FontAwesomeIcon icon={props.icon} />
        </IconWrapper>
      )}
    </>
  );
};

export default FooterIcon;
