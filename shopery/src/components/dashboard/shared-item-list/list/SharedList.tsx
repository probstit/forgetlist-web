import React from "react";

// Styled Components
import {
  StyledList,
  StyledListContainer,
  StyledP,
  Qty
} from "./shared-list-styles";
// Interface
import { Item as IItem } from "../../../../reducers/itemsReducer";
// Components
import SharedItem from "./shared-item/SharedItem";

interface SharedListProps {
  items: IItem[];
  setSharedItems: React.Dispatch<React.SetStateAction<IItem[]>>;
}

const SharedList: React.FC<SharedListProps> = ({ items, setSharedItems }) => {
  return (
    <StyledList>
      <StyledListContainer listHeader>
        <StyledP>Name</StyledP>
        <Qty>Qty</Qty>
        <StyledP shared>Shared By</StyledP>
      </StyledListContainer>
      <StyledListContainer>
        {items.map(item => (
          <SharedItem
            key={item._id}
            item={item}
            setSharedItems={setSharedItems}
          />
        ))}
      </StyledListContainer>
    </StyledList>
  );
};

export default SharedList;
