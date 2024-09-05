import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

// let obj1 = {};
// undefined
// let obj2 = {};
// undefined
// obj1 === obj2
// false
// obj2 = obj1
// {}

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  // const toggleParagraphHandler = () => {
  //   // setShowParagraph(!showParagraph);
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };

  // * useCallback:
  // const toggleParagraphHandler = useCallback(() => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // });

  /*
    React Hook useCallback does nothing when called with only one argument. Did you forget to pass an array of dependencies?eslintreact-hooks/exhaustive-deps
    (alias) useCallback<() => void>(callback: () => void, deps: React.DependencyList): () => void
    import useCallback
    useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    @version — 16.8.0
    @see — https://react.dev/reference/react/useCallback
  */

  // const toggleParagraphHandler = useCallback(() => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // }, []);

  // Use Callback like Use Effect actually wants a second argument and it wants it even more so than Use Effect and just like for Use Effect the second argument should be an array.
  // An array of dependencies off this Use Callback call.
  // And the dependencies here are the same as they are for Use Effect.

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph} />
      {/* <DemoOutput show={false} /> */}
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button
        type="button"
        className={""}
        onClick={toggleParagraphHandler}
        disabled={""}
      >
        Toggle Paragraph!
      </Button>
    </div>
  );
}

export default App;
