import React from "react";
import { Link } from "react-router-dom";

const Modal = props => {
  console.log("TCL: props", props);
  let modalClasses = "Modal";

  if (!props.show) {
    modalClasses += " Hide";
  }

  return (
    <div className={modalClasses}>
      <div className="Modal__card">
        <h3>{props.mainMessage}</h3>
        <Link to={props.btnPath}>
          <button>{props.btnText}</button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
