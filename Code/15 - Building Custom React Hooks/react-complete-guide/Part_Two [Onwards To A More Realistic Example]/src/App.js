import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = useCallback((taskObj) => {
    const loadedTasks = [];
    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  // const {
  //   isLoading,
  //   error,
  //   sendRequest: fetchTasks,
  // } = useHttp(
  //   { url: "https://tasks-a56f9-default-rtdb.firebaseio.com/tasks.json" },
  //   transformTask
  // );

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: "https://tasks-a56f9-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTask
    );
  }, [fetchTasks, transformTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

/* Here down Code Before use Custom Hooks */

// import React, { useEffect, useState } from "react";

// import Tasks from "./components/Tasks/Tasks";
// import NewTask from "./components/NewTask/NewTask";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [tasks, setTasks] = useState([]);

//   const fetchTasks = async (taskText) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         "https://tasks-a56f9-default-rtdb.firebaseio.com/tasks.json"
//       );

//       if (!response.ok) {
//         throw new Error("Request failed!");
//       }

//       const data = await response.json();

//       const loadedTasks = [];

//       for (const taskKey in data) {
//         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//       }

//       setTasks(loadedTasks);
//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }

// export default App;
