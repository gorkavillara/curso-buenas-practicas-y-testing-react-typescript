/* eslint-disable */
import React, { useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import HomePage from "./views/HomePage/HomePage";
import DropDownView from "./views/DropDownView/DropDownView";

function App() {
  const [internalRoute, setInternalRoute] = useState<string>("dropdown");
  return (
    <>
      <nav>
        <button className="home-button" onClick={() => setInternalRoute("home")}>Home</button>
        <button className="dropdown-button" onClick={() => setInternalRoute("dropdown")}>Dropdown</button>
      </nav>
      {internalRoute === "home" && <HomePage />}
      {internalRoute === "dropdown" && <DropDownView />}
    </>
  );
}

export default App;
