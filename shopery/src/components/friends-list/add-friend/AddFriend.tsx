import React, { useState } from "react";
// Components
import Result from "./result/Result";
import Form from "./form/Form";
// Styled Components
import { Overlay } from "../../common-styled-components/common";
import {
  Container,
  ContainerHeader,
  FloatedIconWrapper
} from "./add-friend-styles";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces
import { User } from "../../../hooks/get-user/interfaces";

interface AddFriendProps {
  setShowAddFriend: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialResult: User = {
  _id: "",
  firstName: "",
  lastName: "",
  email: ""
};

const AddFriend: React.FC<AddFriendProps> = ({ setShowAddFriend }) => {
  const [result, setResult] = useState<User>(initialResult);
  const [resultError, setResultError] = useState<string>("");

  const closeSearch = () => {
    setShowAddFriend(false);
  };

  return (
    <Overlay>
      <Container>
        <ContainerHeader>
          <FloatedIconWrapper onClick={closeSearch}>
            <FontAwesomeIcon icon="times" />
          </FloatedIconWrapper>
          <h5>Search People</h5>
        </ContainerHeader>
        <Form
          setResult={setResult}
          setResultError={setResultError}
          initialResult={initialResult}
        />
        <Result user={result} resultError={resultError} />
      </Container>
    </Overlay>
  );
};

export default AddFriend;
