import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredAgeIsValid = ... ;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // useEffect(() => {
  //   if (enteredNameIsValid && enteredAgeIsValid) {
  //     setFormIsValid(true);
  //   }
  // }, [enteredNameIsValid, enteredAgeIsValid]);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  let formIsValid = false;

  // if (enteredNameIsValid) {
  //   // && and any other properties we might have here like entered age if we have that.
  //   formIsValid = true;
  // } else {
  //   // formIsValid = false;
  //   /*
  //   - And actually we don't even need the else case now
  //   - because that is our default and we only override this
  //   - with true if all our input states are valid.
  //   */
  // }

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  /*
    useEffect(() => {
      if (enteredNameIsValid) {
        console.log("Name Input is valid!");
      }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);

      if (event.target.value.trim() !== "") {
        setEnteredNameIsValid(true);
      }
    };

    const nameInputBlurHandler = (event) => {
      setEnteredNameTouched(true);

      if (enteredName.trim() === "") {
        setEnteredNameIsValid(false);
      }
    };

    const formSubmissionHandler = (event) => {
      event.preventDefault();

      setEnteredNameTouched(true);

      if (enteredName.trim() === "") {
        setEnteredNameIsValid(false);
        return;
      }

      setEnteredNameIsValid(true);

      console.log(enteredName);
      const enteredValue = nameInputRef.current.value;
      console.log(enteredValue);

      // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM
      setEnteredName("");
    };
  */

  // const nameInputClasses = enteredNameIsValid
  //   ? "form-control"
  //   : "form-control invalid";

  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
