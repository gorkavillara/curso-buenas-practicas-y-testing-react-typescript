import React, { useContext, useCallback } from "react";
import { AppContext } from "../contexts";
import Mayor10 from "./Mayor10";

const Counter = () => {
  const { counterValue, setCounterValue } = useContext(AppContext);
  const incrementValue = useCallback(
    () => setCounterValue && setCounterValue((prevNum) => prevNum + 1),
    [setCounterValue]
  );
  const decrementValue = useCallback(
    () => setCounterValue && setCounterValue((prevNum) => prevNum - 1),
    [setCounterValue]
  );
  return (
    <div>
      <h1>Componente Counter</h1>
      <p>Valor actual: {counterValue}</p>
      <button onClick={incrementValue}>Suma</button>
      <button onClick={decrementValue}>Resta</button>
      <Mayor10 />
    </div>
  );
};

export default Counter;
