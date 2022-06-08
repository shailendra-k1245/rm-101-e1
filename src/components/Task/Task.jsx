import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter/index";
import {GiTireIronCross} from "react-icons/gi"


const Task = (props) => {
  // console.log("propsdata",props.data);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{props.data.text}</div>
      {/* Counter here */}
      <Counter/>
      <button data-testid="task-remove-button">
        <GiTireIronCross/>
      </button>
    </li>
  );
};

export default Task;
