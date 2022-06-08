import React from "react";
import { useSelector } from "react-redux";
import styles from "./tasks.module.css";
import { Task } from "../Task/index";

const Tasks = () => {
  const todos = useSelector((store) => store.todos);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {todos.map((el) => (
          <Task data={el} key={el.id} />
        ))}
        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
