import React from "react";
// Styled components
import { StyledItemList } from "../../list/list-body/item-list/item-list-styles";
import SharedBodyHeader from "../shared-body-header/SharedBodyHeader";
// Components
import SharedItem from "../shared-item/SharedItem";
// Interface
import { Item } from "../../../../reducers/itemsReducer";

interface SharedItemListProps {
  items: Item[];
}

const SharedItemList: React.FC<SharedItemListProps> = ({ items }) => {
  return (
    <StyledItemList>
      <SharedBodyHeader />
      {items.map(item => (
        <SharedItem key={item._id} item={item} />
      ))}
    </StyledItemList>
  );
};

export default SharedItemList;
