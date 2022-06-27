import React, { useEffect } from "react";
import { getRandomNumber } from "./controller";
// import { PropiedadesBoton } from "./models"
import "./style.css";

const CustomButton = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  useEffect(() => console.log(getRandomNumber()));
  return onClick ? (
    <button className="custom-button" onClick={onClick}>
      Custom Button
    </button>
  ) : null;
};

export default CustomButton;
