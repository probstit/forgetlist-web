import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import grabToken from "../../../util/grab-token";
// Components
import SharedListHeader from "./shared-list-header/SharedListHeader";
import SharedItemList from "./shared-item-list/SharedItemList";
// Styled Components
import { ListBodyWrapper } from "../list/list-body/list-body-styles";
import { ListWrapper } from "../list/list-styles";
// Interface
import { Item } from "../../../reducers/itemsReducer";
// Utils
import { interceptResponse } from "../../../util/response-interceptor";
// Context
import { AuthContext, Auth } from "../../../contexts/authContext";

export interface UserSharedItem {
  userID: string;
  items: Item[];
}

const SharedItems: React.FC = () => {
  const [userSharedItems, setUserSharedItems] = useState<UserSharedItem[]>([]);
  const { setLoggedIn } = useContext<Auth>(AuthContext);

  useEffect(() => {
    const fetchSharedItems = async () => {
      const token = grabToken();
      const url = "http://localhost:8000/api/v1.0/items/shared-by-others";
      if (setLoggedIn) interceptResponse(setLoggedIn);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response) {
        setUserSharedItems(response.data.items);
      }
    };

    fetchSharedItems();
  }, [setLoggedIn]);

  return (
    <>
      {userSharedItems && userSharedItems.length > 0 && (
        <>
          {userSharedItems.map((userSharedItem: UserSharedItem) => (
            <ListWrapper key={userSharedItem.userID}>
              <SharedListHeader sharedUserID={userSharedItem.userID} />
              <ListBodyWrapper>
                <SharedItemList items={userSharedItem.items} />
              </ListBodyWrapper>
            </ListWrapper>
          ))}
        </>
      )}
    </>
  );
};

export default SharedItems;
