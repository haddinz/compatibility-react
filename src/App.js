import "core-js";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("google.com");

  const str = "Hello, TypeScript! Programmer Language, TypeScript";
  const newStr = str.replaceAll("TypeScript", "JavaScript");

  // const req = new PaymentRequest();
  const a = "";

  console.log(newStr);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
