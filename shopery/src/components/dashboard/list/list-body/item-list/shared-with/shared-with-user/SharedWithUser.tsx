import React, { useState, useEffect } from "react";
import axios from "axios";
import grabToken from "../../../../../../../util/grab-token";
// Styled Components
import { IconWrapper, UserContainer } from "./shared-with-user-styles";
// Components
import Avatar from "../../../../../../avatar/Avatar";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces
import { User } from "../../../../../../../hooks/get-user/interfaces";

interface SharedWithUserProps {
  userID: string;
}

const initialState: User = {
  _id: "",
  firstName: "",
  lastName: "",
  email: ""
};

const SharedWithUser: React.FC<SharedWithUserProps> = ({ userID }) => {
  const [user, setUser] = useState<User>(initialState);

  useEffect(() => {
    const findUser = async () => {
      const token = grabToken();
      const url = `http://localhost:8000/api/v1.0/users/user/${userID}`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
    };
    findUser();
  }, [userID]);

  return (
    <UserContainer>
      <Avatar shared user={user} />
      <IconWrapper>
        <FontAwesomeIcon icon="ban" />
      </IconWrapper>
    </UserContainer>
  );
};

export default SharedWithUser;
