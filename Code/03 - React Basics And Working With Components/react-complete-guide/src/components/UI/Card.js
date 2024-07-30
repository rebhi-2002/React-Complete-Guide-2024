import React from "react";

import "./Card.css";

function Card(props) {
  // return <div className="card">{props.children}</div>;
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// * The Result:
// <div class="card expenses">
//   <div class="card expense-item">...</div>;
//   <div class="card expense-item">...</div>;
//   <div class="card expense-item">...</div>;
//   <div class="card expense-item">...</div>;
// </div>;
