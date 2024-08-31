import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const Classes = [`${classes.card} ${props.className}`];
  return <div className={Classes}>{props.children}</div>;
};

export default Card;
