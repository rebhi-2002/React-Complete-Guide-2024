import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // function clickHandler() {}
  //* Array Destructuring: Store both elements in separate variables or constants.
  /* const [title, setTitle] = useState(props.title); */
  console.log("ExpenseItem evaluated by React");

  // Without State, our user interface would never change. But with State and with listening to events, we can make sure that we can react to user input and that such input can result in a visible change on our screen.
  // So State is a super important concept and of course being able to listen to user events is also important as you can tell.

  /*
    const clickHandler = () => {
      setTitle("Updated!");
      console.log(title);
    };
  */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
