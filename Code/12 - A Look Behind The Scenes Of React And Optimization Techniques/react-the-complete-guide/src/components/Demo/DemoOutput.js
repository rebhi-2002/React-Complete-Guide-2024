import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  // return <p>{props.show ? "This is new!" : ""}</p>;
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);

// props.show === props.previous.show
// false === false => true
// 'hi' === 'hi' => true
// [1, 2, 3] === [1, 2, 3] => false

//* Reference-vs-Primitive-Values-in-JavaScript-Tutorial: https://academind.com/tutorials/reference-vs-primitive-values
