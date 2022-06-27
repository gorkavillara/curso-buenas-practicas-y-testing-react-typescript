import React, { useState } from "react";
import "./App.css";
import TernaryComponent from "./components/TernaryComponent";
import StringPropComponent from "./components/StringPropComponent";
import AsincComponent from "./components/AsincComponent";

function App() {
  const [num, setNum] = useState<number>(0);
  const handleClick = () => console.log("click");

  const incrementNum = () => setNum((prevNum) => prevNum + 1);

  return (
    <div className="App">
      <h1>Tema 02 - Código limpio en React</h1>
      <button onClick={incrementNum}>Incrementar: {num}</button>
      {/* <TernaryComponent show={false} />
      <StringPropComponent title={'El número actual es ' + num} />
      <StringPropComponent title={`El número actual es ${num}`} /> */}
      <AsincComponent />
    </div>
  );
}

export default App;
