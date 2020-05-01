import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

function App() {
  // {} in JSX is executed as JS
  // todositem = Name (xxxxx) Defined in Mytodoitem.js (props.xxxxx.variable), refer to an object
  // todosData = Array List imported

  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
