import React, { MouseEventHandler } from "react";
// Styled components
import { ListOptionsWrapper, IconWrapper } from "./list-options-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ListOptionsProps {
  toggleShowAdd: MouseEventHandler;
}

const ListOptions: React.FC<ListOptionsProps> = ({
  toggleShowAdd
}): JSX.Element => {
  // const addItem = () => {
  //   // let token = localStorage.getItem("token") as string;
  //   // if (token) token = JSON.parse(token);
  //   // const url = "http://localhost:8000/api/v1.0/items/add-item";
  //   // axios.post(url)
  // };
  return (
    <ListOptionsWrapper>
      <IconWrapper onClick={toggleShowAdd}>
        <FontAwesomeIcon icon="plus" />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon="lock" />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon="share-square" />
      </IconWrapper>
    </ListOptionsWrapper>
  );
};

export default ListOptions;
