import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /*
    let expensesContent = (
      <p style={{ "text-align": "center", color: "white" }}>No Expenses Found.</p>
    );

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      });
    }
  */

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* {expensesContent} */}

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>} */}
        {/*
          {filtereexpensesContentdExpenses.length > 0 &&
            filteredExpenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              );
            })}
        */}

        {/*
          {filteredExpenses.length === 0 ? (<p>No Expenses Found.</p>) : (
            filteredExpenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              );
            })
          )}
        */}

        {/* {[<Card />, <Card />]} */}

        {/*
          {props.items.map((expense, index) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })}
        */}

        {/*
          {filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })}
        */}
      </Card>
    </div>
  );
}

export default Expense;
