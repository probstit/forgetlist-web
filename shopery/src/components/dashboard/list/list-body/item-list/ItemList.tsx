import React, { useContext } from "react";
// Styled components
import { StyledItemList } from "./item-list-styles";
// Components
import Item from "./Item/Item";
// Context
import {
  ListContext,
  ItemListContext
} from "../../../../../contexts/listContext";

const ItemList: React.FC = () => {
  const { items } = useContext<ItemListContext>(ListContext);
  return (
    <StyledItemList>
      {items && items.map(item => <Item key={item._id} item={item} />)}
    </StyledItemList>
  );
};

export default ItemList;
