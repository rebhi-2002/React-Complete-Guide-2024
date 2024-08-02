import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/*
  Now it's all started by the index.js file, where we initially point at this app component.
  That's the first component function which is being called and that happens when the react app is been loaded on the screen which happens when the page is been visited.
  So that's how react goes through all these components executes all these components functions and draws something on to the screen.
  ----
  The only problem with that is, that react never repeats that.
  React goes through all of that when the application is initially rendered, but thereafter it's done.
  However in modern applications, of course you sometimes want to update what's visible on the screen, for example because a button was clicked and that button should change some text which is being output.
  So we need a way of telling react that something changed and that a certain component should be re-evaluated and that's where react introduces a special concept called state.
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById("root"));
