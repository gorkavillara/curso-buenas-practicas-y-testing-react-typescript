import React from "react";

const TernaryComponent = ({ show }: { show: boolean }) => {
  // return show ? <div>TernaryComponent</div> : null;
  return (
    <div>
      <h1>Ternary Component</h1>
      <p>{show && "Se muestra"}</p>
      <p>{show ? "Se muestra" : null}</p>
    </div>
  );
};

export default TernaryComponent;
