import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import BigComponent from "./BigComponent";
import CustomButton from "./CustomButton";

const routes = [
  {
    name: "ClassComponent",
    component: <ClassComponent />,
  },
  {
    name: "FunctionalComponent",
    component: <FunctionalComponent />,
  },
  {
    name: "BigComponent",
    component: <BigComponent />,
  },
  {
    name: "CustomButton",
    component: <CustomButton />,
  },
];

const routesObj = {
  ClassComponent: <ClassComponent />,
  FunctionalComponent: <FunctionalComponent />,
  BigComponent: <BigComponent />,
  CustomButton: <CustomButton onClick={() => null} />
}

const NavComponent = () => {
  const [route, setRoute] = useState<string>("ClassComponent")
  const [id, setId] = useState<number>(0);
  const cambiarId = () => {
    if (id === 3) return setId(0)
    return setId(prevId => prevId + 1)
    // if (id < 4) {
    //     setId(prevId => prevId + 1)
    // } else {
    //     setId(0)
    // }
  }
  return (
    <>
      <h1>Navegación</h1>
      <button onClick={cambiarId}>Cambiar id={id}</button>
      {routes[id].component}
      {routesObj['ClassComponent']}
    </>
  );
};

export default NavComponent;
