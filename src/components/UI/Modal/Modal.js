import React from "react";
import { Link } from "react-router-dom";

const Modal = props => {
  let modalClasses = "Modal";

  if (!props.show) {
    modalClasses += " Hide";
  }

  return (
    <div className={modalClasses}>
      <div className="Modal__card">{props.children}</div>
    </div>
  );
};

export default Modal;
