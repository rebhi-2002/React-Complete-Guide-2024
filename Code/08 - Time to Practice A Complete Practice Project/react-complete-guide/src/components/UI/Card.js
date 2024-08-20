import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  // return <div className={classes.card}>{props.children}</div>;

  // return (
  //   <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  // );

  const myClasses = [classes.card, props.className];
  return <div className={myClasses.join(" ")}>{props.children}</div>;
};

export default Card;
