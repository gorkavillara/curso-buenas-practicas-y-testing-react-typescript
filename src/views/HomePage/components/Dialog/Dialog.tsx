import React from "react";
import "./Dialog.css";

/* eslint-disable no-undef */
const Dialog = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div role="dialog" className="dialog">
      <div className="dialog-container">{children}</div>
    </div>
  );
};

export default Dialog;
