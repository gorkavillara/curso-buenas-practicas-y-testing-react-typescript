/* eslint-disable quotes */
import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { AppContext } from './contexts';

function App() {
  const [counterValue, setCounterValue] = useState<number>(0);
  return (
    <AppContext.Provider value={{ counterValue, setCounterValue }}>
      <div className="App">
        <Counter />
      </div>
    </AppContext.Provider>
  );
}

export default App;
