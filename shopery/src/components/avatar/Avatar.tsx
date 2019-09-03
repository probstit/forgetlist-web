import React from "react";
// Styled components
import { UserDetails, StyledUserAvatar, StyledUserName } from "./avatar-styles";
// Interfaces
import { User } from "../../hooks/get-user/interfaces";

interface AvatarProps {
  user: User;
  shared?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ user, shared }): JSX.Element => {
  const { firstName, lastName } = user;
  const avatarContent = lastName.charAt(0);

  return (
    <UserDetails>
      <StyledUserAvatar shared={shared ? shared : false}>
        <p>{avatarContent}</p>
      </StyledUserAvatar>
      <StyledUserName>{`${firstName} ${lastName}`}</StyledUserName>
    </UserDetails>
  );
};

export default Avatar;
