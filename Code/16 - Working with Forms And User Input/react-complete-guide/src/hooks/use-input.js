/*
  import { useState } from "react";

  const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    // const ValueIsValid = enteredValue.trim() !== ""; // Keep in mind that the hook (and custom hooks in general), should be generic - it's not limited to one specific input!
    const ValueIsValid = validateValue(enteredValue);
    const hasError = !ValueIsValid && isTouched;

    const valueChangeHandler = (event) => {
      setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
      setIsTouched(true);
    };

    const reset = () => {
      setEnteredValue("");
      setIsTouched(false);
    };

    return {
      value: enteredValue,
      isValid: ValueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
      reset,
    };
  };

  export default useInput;
*/

import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const ValueIsValid = validateValue(inputState.value);
  const hasError = !ValueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: ValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
