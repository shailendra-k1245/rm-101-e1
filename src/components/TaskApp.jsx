import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader/index";
import { AddTask } from "./AddTask/index";

import { Tasks } from "./Tasks/index";

export const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      <AddTask />
      {/* Add Task */}
      <Tasks/>
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
