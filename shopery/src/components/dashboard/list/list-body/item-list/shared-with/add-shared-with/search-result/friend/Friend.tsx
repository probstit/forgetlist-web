import React, { useState, useEffect, useContext } from "react";
import grabToken from "../../../../../../../../../util/grab-token";
import { interceptResponse } from "../../../../../../../../../util/response-interceptor";
import axios from "axios";
// Components
import Avatar from "../../../../../../../../avatar/Avatar";
// Styled Components
import {
  ResultItem,
  FloatedIconWrapper
} from "../../../../../../../../common-styled-components/common";
// Contexts
import {
  ListContext,
  ItemListContext
} from "../../../../../../../../../contexts/listContext";
import {
  AuthContext,
  Auth
} from "../../../../../../../../../contexts/authContext";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interface
import { UserFriend } from "../../../../../../../../../reducers/friendsReducer";
import { Item } from "../../../../../../../../../reducers/itemsReducer";

export interface Props {
  friend: UserFriend;
  usersData: UserFriend[];
  setUsersData: React.Dispatch<React.SetStateAction<UserFriend[]>>;
  item: Item;
}

const Friend: React.FC<Props> = ({ friend, usersData, setUsersData, item }) => {
  const [alreadySharedWith, setAlreadySharedWith] = useState<boolean>(false);
  const { dispatch } = useContext<ItemListContext>(ListContext);
  const { setLoggedIn } = useContext<Auth>(AuthContext);
  const updateItemSharedWithInDB = async (
    friendEmail: string,
    itemID: string
  ) => {
    const token = grabToken();
    const url = `http://localhost:8000/api/v1.0/items/share-with-user/${itemID}`;
    if (setLoggedIn) interceptResponse(setLoggedIn);
    await axios.put(
      url,
      { email: friendEmail },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const addFriend = () => {
    let newSharedList;
    if (item.sharedWith) {
      newSharedList = [...item.sharedWith, friend._id];
    }

    updateItemSharedWithInDB(friend.email, item._id);
    setUsersData([friend, ...usersData]);
    if (dispatch)
      dispatch({
        type: "SHARE_ITEM",
        item: { _id: item._id, sharedWith: newSharedList }
      });
  };

  useEffect(() => {
    usersData.forEach(user => {
      if (friend._id === user._id) setAlreadySharedWith(true);
    });
  }, [friend._id, usersData]);

  return (
    <ResultItem>
      <Avatar user={friend} />
      {alreadySharedWith ? (
        <FloatedIconWrapper friendResult>
          <FontAwesomeIcon icon="user-check" />
        </FloatedIconWrapper>
      ) : (
        <FloatedIconWrapper friendResult onClick={addFriend}>
          <FontAwesomeIcon icon="user-plus" />
        </FloatedIconWrapper>
      )}
    </ResultItem>
  );
};

export default Friend;
