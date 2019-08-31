import React, { useState, useEffect } from "react";
import axios from "axios";
import grabToken from "../../../util/grab-token";
// Styled Components
import { ListBodyWrapper } from "../list/list-body/list-body-styles";
import { ListWrapper } from "../../dashboard/list/list-styles";
import { SharedListHeader } from "./shared-item-list-styles";
// Components
import SharedList from "./list/SharedList";
// Interface
import { Item } from "../../../reducers/itemsReducer";

const SharedItemList: React.FC = () => {
  const [sharedItems, setSharedItems] = useState<Item[]>([]);

  const fetchSharedItems = async () => {
    const token = grabToken();
    const url = "http://localhost:8000/api/v1.0/items/shared-by-others";

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setSharedItems(response.data.items);
  };

  useEffect(() => {
    fetchSharedItems();
  }, []);

  return (
    <>
      {sharedItems && sharedItems.length > 0 && (
        <ListWrapper>
          <SharedListHeader>
            <p>Items from friends</p>
          </SharedListHeader>
          <ListBodyWrapper>
            <SharedList items={sharedItems} setSharedItems={setSharedItems} />
          </ListBodyWrapper>
        </ListWrapper>
      )}
    </>
  );
};

export default SharedItemList;
