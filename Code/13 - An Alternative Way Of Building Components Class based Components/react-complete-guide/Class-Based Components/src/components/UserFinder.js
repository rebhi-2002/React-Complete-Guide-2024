import React, { Fragment, useState, useEffect, useContext } from "react";

import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class UserFinder extends React.Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      // filteredUsers: DUMMY_USERS,
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // Instead, we wanna fetch the users
  // when this component is rendered for the first time,
  // and that is something we would typically do
  // with component did mount.

  componentDidMount() {
    // Send http request...
    // return this.setState({ filteredUsers: DUMMY_USERS });
    return this.setState({ filteredUsers: this.context.users });
  }

  // We don't need an if check here
  // because component did mount will only run once
  // when the component initially was rendered
  // for the first time.
  // If then is updated thereafter,
  // component did mount will not execute,
  // instead, components did update will execute.

  // * useEffect(, [])
  // * useEffect(() => {}, [someDep])

  /*
  Class-based Component Lifecycle
  ===============================
  
  - Side-effects in Functional Components: useEffect()
  
  - Class-based Components can’t use React Hooks!
  
  * componentDidMount()
  * Called once component mounted
  (was evaluated & rendered)
  * useEffect(…, [])
  
  * componentDidUpdate()
  * Called once component updated
  (was evaluated & rendered)
  * useEffect(…, [someValue])
  
  * componentWillUnmount()
  * Called right before component is
  unmounted (removed from DOM)
  * useEffect(() => { return () => {…}}, []) // EFFECT CLEANUP
  
  */

  // useEffect(() => {
  //   setFilteredUsers(
  //     DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
  //   );
  // }, [searchTerm]);

  // * componentDidUpdate()
  // * Called once component updated (was evaluated & rendered)
  // * useEffect(…, [someValue])

  // componentDidUpdate() {
  //   this.setState({
  //     filteredUsers: DUMMY_USERS.filter((user) =>
  //       user.name.includes(this.state.searchTerm)
  //     ),
  //   });
  // }

  // we would create an infinite loop.
  // Because component did update is now executed every time this component changed.
  // When we set the state, the component will change.
  // So then this will execute again and it will change the state again.
  // And it will execute again.
  // You get my point, this would be an infinite loop.

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      // this.setState({
      //   filteredUsers: DUMMY_USERS.filter((user) =>
      //     user.name.includes(this.state.searchTerm)
      //   ),
      // });
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  // And now with that, we replace use effect with component did update.
  // This also shows you how nice use effect is.

  // It's very short and by specifying the dependencies here, we don't have to add an if check inside of it.
  // We need to add an if check here for component did update, to prevent an infinite loop but we don't need to do this with use effect because we specified search term as a dependency.
  // So automatically this affect function will only be executed by React if that dependency changed.
  // And our changes and other reasons for this component to re-render are ignored for this effect, because of this dependencies array.
  // If you would be updating based on prop changes.
  // and you wanna add the component there for updates, then you could compare previous props to current props but here it's the state change, which matters to us the state change inside of this component, and hence we compare our previous state, a specific slice of that state with the current state and that specific slice of that state.

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        {/* <UsersContext.Consumer></UsersContext.Consumer> */}
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
