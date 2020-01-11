import React from "react";

const Input = props => {
  let newInput;
  switch (props.input) {
    case "text":
      newInput = <input type={props.input} {...props} />;
      break;
    case "textarea":
      newInput = <textarea {...props} />;
      break;
    default:
      newInput = <input type="text" {...props} />;
      break;
  }

  return (
    <div className="Input">
      <label htmlFor={props.name}>{props.label}</label>
      {newInput}
    </div>
  );
};

export default Input;
