import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // constructor() {}

  componentWillUnmount() {
    console.log("User will unmount!");
    // * Called right before component is unmounted (removed from DOM)
    // * useEffect(() => { return () => {…}}, []) // EFFECT CLEANUP
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
