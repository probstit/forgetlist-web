import React from "react";
// Styled components
import { UserDetails, StyledUserAvatar, StyledUserName } from "./avatar-styles";
// Interfaces
import { User } from "../../../hooks/get-user/interfaces";

interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }): JSX.Element => {
  const { firstName, lastName } = user;
  const avatarContent = lastName.charAt(0);

  console.log("rendering avatar");
  return (
    <UserDetails>
      <StyledUserAvatar>
        <p>{avatarContent}</p>
      </StyledUserAvatar>
      <StyledUserName>{`${firstName} ${lastName}`}</StyledUserName>
    </UserDetails>
  );
};

export default Avatar;
