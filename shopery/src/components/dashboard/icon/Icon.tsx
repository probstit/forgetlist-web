import React, { MouseEventHandler } from "react";
// Import styled components
import { IconWrapper } from "./icon-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ThemeProps from "../../../theme/theme-props.interface";

interface FAIcon extends ThemeProps {
  icon: IconProp;
  onClick?: MouseEventHandler;
}

const Icon: React.SFC<FAIcon> = (props): JSX.Element => {
  if (props.footer) {
    return (
      <IconWrapper footer>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper>
    );
  } else if (props.liOption) {
    if (props.trash) {
      return (
        <IconWrapper onClick={props.onClick} trash liOption>
          <FontAwesomeIcon icon={props.icon} />
        </IconWrapper>
      );
    }
    return (
      <IconWrapper liOption>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper>
    );
  } else {
    return (
      <IconWrapper>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper>
    );
  }
};

export default Icon;
