import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingBasket);

ReactDOM.render(<App />, document.getElementById("root"));
