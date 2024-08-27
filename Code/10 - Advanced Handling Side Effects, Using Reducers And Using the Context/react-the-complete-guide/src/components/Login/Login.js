import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
  // **state**: The state snapshot used in the component re-render/ re-evaluation cycle
  // **dispatchFn**: A function that can be used to dispatch a new action (i.e. trigger an update of the state)
  // **reducerFn**: (prevState, action) => newState A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state.
  // **initialState**: The initial state
  // **initFn**: A function to set the initial state programmatically

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null, // isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  /*
    useEffect(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, []);

    useEffect(() => {
      console.log("EFFECT RUNNING");
    });

    useEffect(() => {
      console.log("EFFECT RUNNING");
    }, []);

    useEffect(() => {
      console.log("EFFECT RUNNING");
      return () => {
        console.log("EFFECT CLEANUP");
      };
    }, [enteredPassword]);

    useEffect(() => {
      console.log("EFFECT RUNNING");

      return () => {
        console.log("EFFECT CLEANUP");
      };
    }, []);
  */

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking for Validity!");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log("CLEANUP");
  //     clearTimeout(identifier);
  //   }; // Cleanup Function
  // }, [enteredEmail, enteredPassword]);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking for Validity!");
      setFormIsValid(
        // enteredEmail.includes("@") && enteredPassword.trim().length > 6
        // emailState.isValid && passwordState.isValid
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    }; // Cleanup Function
  }, [emailIsValid, passwordIsValid]); // [enteredEmail, enteredPassword] // [emailState, passwordState]

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // setFormIsValid(event.target.value.includes("@") && enteredPassword.trim().length > 6);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    // setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes("@"));
    // setFormIsValid(event.target.value.trim().length > 6 && emailState.value.includes("@"));
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    // setEmailIsValid(emailState.value.includes("@"));
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // props.onLogin(emailState.value, passwordState.value);
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/*
        <div
          className={`${classes.control} ${
            // emailIsValid === false ? classes.invalid : ""
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // value={enteredEmail}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            // passwordIsValid === false ? classes.invalid : ""
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={enteredPassword}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        */}

        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button> */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
