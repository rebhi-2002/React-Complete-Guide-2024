import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// props.onClick === props.previous.onClick // Now, two objects, even if they have the same content, are never equal in JavaScript when compared like this
// And, therefore, React.memo finds out that the value changed just because of how JavaScript works.
