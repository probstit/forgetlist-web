import React, { useEffect, useState } from "react";
import axios from "axios";
import grabToken from "../../../../../util/grab-token";
// Styled Components
import { StyledListItem } from "./shared-item-styles";
import { StyledP, Qty } from "../shared-list-styles";
import { Item } from "../../../../../reducers/itemsReducer";

interface SharedItemProps {
  item: Item;
  setSharedItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

interface SharedItemState {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  email: ""
};

const SharedItem: React.FC<SharedItemProps> = ({ item, setSharedItems }) => {
  const [itemOwner, setItemOwner] = useState<SharedItemState>(initialState);

  const markAsBought = async () => {
    const url = `http://localhost:8000/api/v1.0/items/mark-bought/${item._id}`;
    const token = grabToken();
    await axios.put(url, {}, { headers: { Authorization: `Bearer ${token}` } });
    setSharedItems(sharedItems =>
      sharedItems.filter(sharedItem => sharedItem._id !== item._id)
    );
  };

  useEffect(() => {
    const findItemOwner = async () => {
      const url = `http://localhost:8000/api/v1.0/users/user/${item.userID}`;
      const token = grabToken();
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setItemOwner(response.data);
    };

    findItemOwner();
  }, [item.userID]);

  return (
    <StyledListItem onClick={markAsBought}>
      <StyledP>{item.name}</StyledP>
      <Qty itemQty>{item.quantity}</Qty>
      <StyledP shared>{`${itemOwner.firstName} ${itemOwner.lastName}`}</StyledP>
    </StyledListItem>
  );
};

export default SharedItem;
