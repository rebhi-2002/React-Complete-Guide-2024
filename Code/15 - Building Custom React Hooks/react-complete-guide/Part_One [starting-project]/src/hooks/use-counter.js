import React from "react";
import { useState, useEffect } from "react";

// const useCounter = (counterUpdateFn) => {
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
      // setCounter(counterUpdateFn()); // in [ForwardCounter.js]: //  const forwards = () => { return (prevCounter) => prevCounter + 1;}; const counter = useCounter(forwards);
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;

//* return counter; // return []; // return {}; // return 12;
// You can return whatever you wanna return in your custom hooks.
// That could be an array or an object or a number
// or in this case implicitly a number because counter will hold a number.
