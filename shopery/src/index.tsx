import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBasket,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingBasket, faAngleLeft);

ReactDOM.render(<App />, document.getElementById("root"));
