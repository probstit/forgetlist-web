import React, { useState, useEffect } from "react";
import axios from "axios";
import grabToken from "../../../../../../util/grab-token";
import { User } from "../../../../../../hooks/get-user/interfaces";

// Styled Components
import { SharedWithContainer, Title, Users } from "./shared-with-styles";
// Components
import SharedWithUser from "./shared-with-user/SharedWithUser";

interface SharedWithProps {
  userIDs: string[] | undefined;
}

const SharedWith: React.FC<SharedWithProps> = ({ userIDs }) => {
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    const findUsers = async () => {
      const token = grabToken();
      const url = "http://localhost:8000/api/v1.0/users/shared-with";
      const response = await axios.get(url, {
        params: {
          users: userIDs
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUsersData(response.data.users);
    };

    findUsers();
  }, [userIDs]);

  return (
    <SharedWithContainer>
      <Title>Shared With</Title>
      <Users>
        {usersData &&
          usersData.map(user => <SharedWithUser key={user._id} user={user} />)}
      </Users>
    </SharedWithContainer>
  );
};

export default SharedWith;
