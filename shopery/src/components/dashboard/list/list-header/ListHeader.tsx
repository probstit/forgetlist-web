import React, { useState } from "react";
// Styled Components
import { StyledListHeader } from "./list-header-styles";
// Import components
import Avatar from "../../avatar/Avatar";
import ListOptions from "./list-options/ListOptions";
import AddItemForm from "./add-item-form/AddItemForm";
// Interfaces
import { User } from "../../../../hooks/get-user/interfaces";
import { ListItem } from "../List";

interface ListHeaderProps {
  user: User;
  setItems: React.Dispatch<React.SetStateAction<ListItem[]>>;
  items: ListItem[];
}

const ListHeader: React.FC<ListHeaderProps> = ({
  user,
  setItems,
  items
}): JSX.Element => {
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <StyledListHeader>
      <Avatar user={user} />
      <ListOptions toggleShowAdd={toggleShowAdd} />
      {showAdd && <AddItemForm setItems={setItems} items={items} />}
    </StyledListHeader>
  );
};

export default ListHeader;
