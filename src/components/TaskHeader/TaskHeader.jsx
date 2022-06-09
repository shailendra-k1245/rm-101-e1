import React from "react";
import { useSelector } from "react-redux";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  const todos = useSelector((store) => store.todos);
  const totalTask = todos.length;
  let c = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done == false) {
      c++;
    }
  }

  const unCompletedTask = c;

 
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      You have <b data-testid="header-remaining-task">
        {unCompletedTask}
      </b> of <b data-testid="header-total-task">{totalTask}</b> tasks remaining
    </div>
  );
};

export default TaskHeader;
