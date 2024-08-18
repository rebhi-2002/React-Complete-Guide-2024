import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      // updatedGoals.unshift({ text: enteredText, id: "goal1" });
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    // src\App.js:
    // Line 42:6:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
    // Did you want a JSX fragment <>...</>? (42: 6)

    // React.createElement(),
    // React.createElement()

    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
        {/* [<CourseInput onAddGoal={addGoalsHandler} ]/> => [addGoal(s)Handler] =>   // [src\App.js] // [Line 49:33: 'addGoalsHandler' is not defined no-undef] */}
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
