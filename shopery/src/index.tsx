import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBasket,
  faAngleLeft,
  faSync,
  faBars,
  faUserFriends,
  faClipboardList,
  faHistory,
  faPlus,
  faLock,
  faLockOpen,
  faShareSquare,
  faShare,
  faEdit,
  faTrashAlt,
  faUserPlus,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingBasket,
  faAngleLeft,
  faSync,
  faBars,
  faUserFriends,
  faClipboardList,
  faHistory,
  faPlus,
  faLock,
  faLockOpen,
  faShareSquare,
  faShare,
  faEdit,
  faTrashAlt,
  faUserPlus,
  faSignOutAlt
);

ReactDOM.render(<App />, document.getElementById("root"));
