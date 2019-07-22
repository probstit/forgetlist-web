import * as React from "react";
import * as ReactDOM from "react-dom";
import "./main.scss";

export default function App(): JSX.Element {
  return <h1>Hello from React!</h1>;
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
