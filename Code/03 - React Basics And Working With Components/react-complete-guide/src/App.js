import React from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

// function App() {
const App = () => {
  // A Component in React is just a JavaScript function.

  // const expenses = [
  //   { title: "Car Insurance", mount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: "Car Insurance", mount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: "Car Insurance", mount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: "Car Insurance", mount: 294.67, date: new Date(2021, 2, 28) },
  // ];

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    // A special kind of function special regarding what it returns that it does return this JSX code, but other than that, it's just a Java script function.
    <div>
      <h2>Let's get started!</h2>

      {/* <ExpenseItem
        // title="Toilet Paper"
        title={expenses[0].title}
        // name={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}

      {/* <ExpenseItem
        // title="Toilet Paper"
        title={expenses[0].title}
        // name={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}

      <Expenses items={expenses} />

      {/*
        {expenses.map((expense) => {
          const id = expense.id;
          const title = expense.title;
          const amount = expense.amount;
          const data = expense.date;
          return (
            <ExpenseItem
              key={id}
              title={title}
              amount={amount}
              data={data}
            ></ExpenseItem>
          );
        })}
      */}
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // CreateElement takes three arguments. The first argument is the element which should be created. For example, a div. And if it's a built-in HTML element, you just pass in a string with the name of that element, like div.
  // The second argument is an object that configures this element. Specifically, an object which sets all the attributes of this element. This div has no attributes, so here we can pass in an empty object.
  // The third argument now is the content between the opening and closing div tags. And actually it's not just a third argument. You can now have an infinitely long list of arguments, which are the different content pieces between the opening and closing tags. So here we have two elements, so we would have two extra arguments.
  // The third argument would be our H2 element. So the first child in that div. And therefore here, again, we would call React createElement and create an H2 element here. And that H2 element, again, has no attributes, so the second argument of this second createElement call would be an empty object. And the third argument of this createElement call would be the content in this H2 tag, so this string, in this case. So we would pass this string here, and escape this single quote. And if we now format it, it would look like this.
  /*
    Now next to this second createElement call, We could have a third createElement call, which is the neighbor element to this H2 element, so this expenses component.
    Again, we create an element here, but now we're working with a custom component instead of a built-in one.
    In such cases, you don't use a string here, but you just point at your imported function, which it in the end is, because your components are just functions, right? So here we set Expenses.
    We point at Expenses as an element here.
    The second argument is an object of properties that should be set, of attributes that should be set, and here we have the items prop, the items attribute, so we would add an items key here.
    Keep in mind, this is just a JavaScript object, so we have the property name, and then a colon, and then the value, which here would be expenses.
    And then as a third argument, we have to content between the opening and closing tags. And in this case, there is no such contents, so we omit it.
    And this here would be the alternative to this JSX code using this React object.
  */
  // And therefore, if I saved that, we go back to the screen, we see exactly the same as before.
  // Now, you could write your entire React app like this. It just turns out that this is a bit harder to read and a bit more cumbersome than using this JSX code.
  // But that's why you needed to import React from React in all your component files in the past, because this is the under-the-hood code which kind of gets created automatically when you use JSX.
  // Now in more modern project setups, you can omit this React import [import React from "react";] because the project setup is able to make that transformation without the import being added.
  /*
    But if you see component functions where this import is there, it is there because, in the past, you always did need to add it.
    And therefore, because of that reason, I will now also import it and add it to all components where I use some JSX code.
    Like here, index.js, Expenses.js, ExpenseItem.js, ExpenseDate.js, and Card.js.
  */
  // Again, you technically don't need to do that,
  // but I'm doing it to really emphasize that React is still being used under the hood here when you use JSX code, because that code under the hood is transformed to something like this before it's then transformed even more to what we saw in the browser earlier.
};

export default App;
