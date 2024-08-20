import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

//* undefined.map();
// undefined, is a valued type of JavaScript and indeed undefined
// this value type doesn't have a map method that is correct
// You can't map undefined

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length === 0 ? (
          <p
            style={{
              color: "red",
              fontSize: "18px",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            No users found.
          </p>
        ) : (
          props.users.map((user, index) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            );
          })
        )}
      </ul>
    </Card>
  );
};

export default UserList;
