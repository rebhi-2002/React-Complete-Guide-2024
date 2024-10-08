import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation /*onLogout={props.onLogout}*/
      /*isLoggedIn={props.isAuthenticated}*/
      />
    </header>
  );
};

export default MainHeader;
