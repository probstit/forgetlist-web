import React from "react";
import axios from "axios";
import grabToken from "../../../../util/grab-token";
// Styled Components
import { StyledSharedItem } from "./shared-item-styles";
// Interface
import { Item } from "../../../../reducers/itemsReducer";

interface SharedItemProps {
  item: Item;
}

const SharedItem: React.FC<SharedItemProps> = ({ item }) => {
  const markAsBought = async () => {
    const token = grabToken();
    const url = `http://localhost:8000/api/v1.0/items/mark-bought/${item._id}`;
    await axios.put(url, {}, { headers: { Authorization: `Bearer ${token}` } });
  };

  return (
    <StyledSharedItem onClick={markAsBought}>
      <p>{`${item.name}`}</p> <p>{`${item.quantity}`}</p>
    </StyledSharedItem>
  );
};

export default SharedItem;
