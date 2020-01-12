import React from "react";

const Button = props => {
  let classes = "Button";

  if (props.type === "success") {
    classes += " Success";
  }

  if (props.type === "danger") {
    classes += " Danger";
  }
  return (
    <button className={classes} type={props.type} onClick={props.clickhandler}>
      {props.children}
    </button>
  );
};

export default Button;
