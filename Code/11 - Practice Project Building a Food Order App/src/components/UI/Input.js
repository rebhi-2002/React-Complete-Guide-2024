import React from "react";

import classes from "./Input.module.css";

// { type: 'text' }
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} /> {/* ref={amountInputRef} */}
      {/* <input id={props.input.id} {...props.input} type="text" /> */}
    </div>
  );
});

export default Input;
