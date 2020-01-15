import React from "react";

const Input = props => {
  let newInput;
  switch (props.input) {
    case "text":
      newInput = (
        <input
          className="Input__input"
          type={props.input}
          {...props}
          onChange={() => {}}
        />
      );
      break;
    case "textarea":
      newInput = (
        <textarea className="Input__input" {...props} onChange={() => {}} />
      );
      break;
    default:
      newInput = (
        <input
          className="Input__input"
          type="text"
          {...props}
          onChange={() => {}}
        />
      );
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
