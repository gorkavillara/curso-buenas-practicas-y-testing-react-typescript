import React, { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import CustomButton from "./components/CustomButton";
import BigComponent from "./components/BigComponent";
import NavComponent from "./components/NavComponent";
import MemoComponent from "./components/MemoComponent";
import ListComponent from "./components/ListComponent";
import FormComponent from "./components/FormComponent";

function App() {
  const [num, setNum] = useState<number>(0);
  const handleClick = () => console.log("click");

  const incrementNum = () => setNum((prevNum) => prevNum + 1);

  return (
    <div className="App">
      <h1>Tema 1</h1>
      <button onClick={incrementNum}>Incrementar: {num}</button>
      {/* <ClassComponent />
      <FunctionalComponent />
      <CustomButton onClick={handleClick} />
      <BigComponent />
      <MemoComponent title={`Soy un Memo Component: Número: ${num}`} />
      <ListComponent /> */}
      {/* <NavComponent /> */}
      <FormComponent />
    </div>
  );
}

export default App;
