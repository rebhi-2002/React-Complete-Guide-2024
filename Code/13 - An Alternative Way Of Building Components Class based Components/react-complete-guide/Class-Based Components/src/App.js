import Users from "./components/Users";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };
  return (
    // <div>
    //   {/* <Users /> */}
    //   <UserFinder />
    // </div>

    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;

/* {007 Class-based Components & Context}

[\src\store\users-context.js]:
==============================

const UsersContext = React.createContext({
  users: [],
});

[\src\App.js]:
==============

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const usersContext = {
  users: DUMMY_USERS,
};

<UsersContext.Provider value={usersContext}>
  <UserFinder />
</UsersContext.Provider>

[\src\components\UserFinder.js]:
================================

static contextType = UsersContext;
this.context.users

*/
