import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";

const MuestraProductos = () => {
  const { setDialogShown } = useContext(HomeContext);
  const showDialog = () =>
    setDialogShown ? setDialogShown(true) : console.log("Es undefined");
  return (
    <button role="muestra-productos" onClick={showDialog}>
      Muestra Productos
    </button>
  );
};

export default MuestraProductos;
