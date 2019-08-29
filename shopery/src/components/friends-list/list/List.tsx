import React, { useCallback } from "react";
import axios from "axios";
import grabToken from "../../../util/grab-token";
// Components
import Avatar from "../../dashboard/avatar/Avatar";
// Styled Componnts
import { StyledList, RemoveFriendBtn } from "./list-styles";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interface + fetch function
import { IfriendsData } from "../FriendsList";

interface ListProps {
  friendsData: IfriendsData[];
  setFriendsData: React.Dispatch<React.SetStateAction<IfriendsData[]>>;
}

// sends delete request for removing a friend.
const removeFriendDB = async (friendID: string) => {
  const token = grabToken();
  const url = `http://localhost:8000/api/v1.0/social/remove-friend/${friendID}`;
  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response);
  } catch (err) {
    console.log(err.response.data.payload.message);
  }
};

const List: React.FC<ListProps> = ({ friendsData, setFriendsData }) => {
  const removeFriend = useCallback(
    (friendID: string) => {
      setFriendsData(friendsData =>
        friendsData.filter((friend: IfriendsData) => friend._id !== friendID)
      );

      removeFriendDB(friendID);
    },
    [setFriendsData]
  );

  return (
    <StyledList>
      {friendsData.map((friend: IfriendsData) => {
        return (
          <li key={friend._id}>
            <Avatar user={friend} />
            <RemoveFriendBtn onClick={() => removeFriend(friend._id)}>
              <FontAwesomeIcon icon="user-times" />
            </RemoveFriendBtn>
          </li>
        );
      })}
    </StyledList>
  );
};

export default List;
