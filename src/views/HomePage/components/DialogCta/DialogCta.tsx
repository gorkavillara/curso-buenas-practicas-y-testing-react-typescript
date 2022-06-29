import React from "react";
import "./DialogCta.css";

/* eslint-disable no-undef */
const DialogCta = ({
  ctaLink,
  children
}: {
  ctaLink: string
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div className="dialog">
      <div className="dialog-container">
        <div>{children}</div>
        <a href={ctaLink}>{ctaLink}</a>
      </div>
    </div>
  );
};

export default DialogCta;
