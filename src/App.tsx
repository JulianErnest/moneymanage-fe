import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/converter">Converter</Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
