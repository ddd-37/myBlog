import React from "react";

const Button = props => {
  let classes = "Button";

  if (props.type === "success") {
    classes += " Success";
  }

  if (props.type === "cancel") {
    classes += " Cancel";
  }
  return (
    <button className={classes} type={props.type}>
      {props.text}
    </button>
  );
};

export default Button;
