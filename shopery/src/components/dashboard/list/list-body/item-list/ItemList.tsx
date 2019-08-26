import React from "react";
// Styled components
import { StyledItemList } from "./item-list-styles";
// Components
import Item from "./Item/Item";
// Interface
import { Item as ItemDetails } from "../../../../../reducers/itemsReducer";

interface ItemListProps {
  items: ItemDetails[];
  displayOptions: boolean;
  historyItem: boolean;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  displayOptions,
  historyItem
}) => {
  return (
    <StyledItemList>
      {items &&
        items.map(item => (
          <Item
            key={item._id}
            item={item}
            displayOptions={displayOptions}
            historyItem={historyItem}
          />
        ))}
    </StyledItemList>
  );
};

export default ItemList;
