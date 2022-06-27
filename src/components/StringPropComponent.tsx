import React from "react";
import { Modelo1 } from "../models";

const StringPropComponent = ({
  title,
  modelo,
}: {
  title: string;
  modelo?: Modelo1;
}) => {
  // const { nombre, edad, coche } = modelo;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default StringPropComponent;
