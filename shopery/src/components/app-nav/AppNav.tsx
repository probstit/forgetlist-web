import React from "react";
//Styled Components
import { AppNavContainer } from "./app-nav-styles";
import Icon from "../icon/Icon";

interface AppNavProps {
  history: any;
}

const AppNav: React.FC<AppNavProps> = ({ history }) => {
  const moveToFriendList = () => {
    history.push("/friends");
  };

  const moveToItemList = () => {
    history.push("/");
  };

  const moveToHistory = () => {
    history.push("/history");
  };

  return (
    <AppNavContainer>
      <Icon footer onClick={moveToFriendList} icon="user-friends" />
      <Icon footer onClick={moveToItemList} icon="clipboard-list" />
      <Icon footer onClick={moveToHistory} icon="history" />
    </AppNavContainer>
  );
};

export default AppNav;
