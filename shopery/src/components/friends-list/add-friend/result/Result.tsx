import React, { useState, useEffect } from "react";
import axios from "axios";
import grabToken from "../../../../util/grab-token";
// Styled components
import { ResultContainer, ResultItem, ResultError } from "./result-styles";
import { FloatedIconWrapper } from "../add-friend-styles";
// Components
import Avatar from "../../../dashboard/avatar/Avatar";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interface
import { User } from "../../../../hooks/get-user/interfaces";

interface ResultProps {
  user: User;
  resultError: string;
}

const checkIsFriend = async (user: User): Promise<boolean> => {
  const token = grabToken();
  const response = await axios.get(
    `http://localhost:8000/api/v1.0/social/is-friend/${user._id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const isAlreadyFriend = response.data.isAlreadyFriend;

  return isAlreadyFriend;
};

const Result: React.FC<ResultProps> = ({ user, resultError }) => {
  const [isAlreadyFriend, setIsAlreadyFriend] = useState<boolean>(false);

  const sendRequest = async () => {
    const token = grabToken();
    const url = "http://localhost:8000/api/v1.0/social/add-friend";
    await axios.post(
      url,
      { email: user.email },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  };

  const addFriend = () => {
    sendRequest();
    setIsAlreadyFriend(true);
  };

  useEffect(() => {
    if (user.email.length > 0) {
      checkIsFriend(user).then(isFriend => {
        setIsAlreadyFriend(isFriend);
      });
    }
  }, [user]);

  return (
    <ResultContainer>
      {user && user.email.length > 0 ? (
        <ResultItem>
          <>
            <Avatar user={user} />
            {isAlreadyFriend ? (
              <FloatedIconWrapper friendResult>
                <FontAwesomeIcon icon="user-check" />
              </FloatedIconWrapper>
            ) : (
              <FloatedIconWrapper onClick={addFriend} friendResult>
                <FontAwesomeIcon icon="user-plus" />
              </FloatedIconWrapper>
            )}
          </>
        </ResultItem>
      ) : (
        <ResultError>{resultError}</ResultError>
      )}
    </ResultContainer>
  );
};

export default Result;
