import React, { useState, useRef } from "react";
// Styled Components
import { StyledListHeader } from "./list-header-styles";
// Import components
import Avatar from "../../avatar/Avatar";
import ListOptions from "./list-options/ListOptions";
import AddItemForm from "./add-item-form/AddItemForm";
// Interfaces
import { User } from "../../../../hooks/get-user/interfaces";

interface ListHeaderProps {
  user: User;
}

const ListHeader: React.FC<ListHeaderProps> = ({ user }): JSX.Element => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Toggle the form for adding an item.
  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <StyledListHeader ref={headerRef}>
      <Avatar user={user} />
      <ListOptions toggleShowAdd={toggleShowAdd} />
      {showAdd && <AddItemForm setShowAdd={setShowAdd} headerRef={headerRef} />}
    </StyledListHeader>
  );
};

export default ListHeader;
