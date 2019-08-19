import React from "react";
// Styled components
import { StyledItemList, Item, ItemOptions } from "./item-list-styles";
import { FloatedContent, NameWrapper, QtyWrapper } from "../list-body-styles";
// Import FA Icon
import Icon from "../../../icon/Icon";
// Interface
import { ListItemProps } from "../ListBody";

const ItemList: React.FC<ListItemProps> = ({ items }) => {
  return (
    <StyledItemList>
      {items.map(item => (
        <Item key={item._id}>
          <FloatedContent>
            <NameWrapper>{item.name}</NameWrapper>
            <QtyWrapper>{item.quantity}</QtyWrapper>
          </FloatedContent>
          <ItemOptions>
            <Icon liOption icon="lock" />
            <Icon liOption icon="share" />
            <Icon liOption icon="edit" />
            <Icon trash liOption icon="trash-alt" />
            <Icon liOption icon="caret-up" />
          </ItemOptions>
        </Item>
      ))}
    </StyledItemList>
  );
};

export default ItemList;
