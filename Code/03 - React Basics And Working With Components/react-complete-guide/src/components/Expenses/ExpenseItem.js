/* [ExpenseItem.js]
  in React applications to name it like this.
  Starting with a capital character, one word,
  where if you combine multiple words in one word,
  every sub word, so to say,
  starts with a new capital character like the I here in item.
  And then inside of this Component,
  if the file is named like this,
  you'll of course should have a Component
  that is dealing with rendering expense item data.
  So that the file name tells us which kind of logic
  and HTML code will live inside of that file.
*/

import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"; // This simply tells the build process that the CSS files should be considered.

function ExpenseItem(props) {
  // function ExpenseItem(title, amout, data)

  // return <h2>Expense item!</h2>;

  // const expenseDate = new Date(2021, 2, 28); // 02(March)/28/2021
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  return (
    // <div> <div>Date</div> <div>Title</div> <div>Amount</div> </div>

    // <div className="expense-item">
    //   <div>March 28th 2021</div>
    //   <div className="expense-item__description">
    //     <h2>Car Insurance</h2>
    //     {/* <h2>{1 + 1}</h2> */}
    //     {/* <h2>{Math.random()}</h2> */}
    //     <div className="expense-item__price">$294.67</div>
    //   </div>
    // </div>

    // <div className="expense-item">
    //   <div>{expenseDate.toISOString()}</div>
    //   {/* toUTCString() | toString() | toDateString() | toTimeString() | toLocaleString() | toLocaleDateString() | toLocaleTimeString() */}
    //   <div className="expense-item__description">
    //     <h2>{expenseTitle}</h2>
    //     <div className="expense-item__price">${expenseAmount}</div>
    //   </div>
    // </div>

    // <div className="expense-item">
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}

      {/*
        <div>
          // <div>Month</div>
          <div>{props.date.toLocaleString("en-US", { month: "Long" })}</div>
          <div>Year</div>
          <div>Day</div>
        </div>
      */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}

      {/* <ExpenseDate date={props.date}></ExpenseDate> */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2> {/* <h2>{props.name}</h2> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>

    /*
      Now there's one special thing here.
      We don't type class here as we would do in regular HTML,
      but instead className.
      And this can be strange, but you have to keep in mind
      that this here is not really HTML.
      It looks like HTML, but it's this special
      JSX syntex invented by the React team.
      And in the end under the hood, it's still JavaScript code,
      that's why most attributes are the same, but not all.
      And here the class attribute was renamed to className
      because class is a reserved word in JavaScript.
      Technically it would still work
      if you would use class here, but should use className.
    */
    /*
    Warning: Invalid DOM property `class`. Did you mean `className`?
    at h2
    at div
    at div
    at ExpenseItem
    at div
    at App
    */
  );
}

export default ExpenseItem;

// Now we can import it in another file.
// And as I mentioned, we're not going to import it
// in index JS, and we're not going to render it like this => [const root = ReactDOM.createRoot(document.getElementById("root")); root.render(<App />);],
// because we only do this once for our root Component => [<div id="root"></div>;].
