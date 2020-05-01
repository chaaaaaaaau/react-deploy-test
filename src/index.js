import React from "react"; // enable JSX
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// What do I want to render, where do I want to render it
// JSX (Html in JS)
// Cannot Include 2 JSX elements separately -> wrap them into one enclosed tag

ReactDOM.render(
  <App />,
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
