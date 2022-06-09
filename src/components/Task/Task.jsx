import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter/index";
import { GiTireIronCross } from "react-icons/gi";

const Task = (props) => {
  const count = props.data.count;
  const id = props.data.id;
  // console.log("propsdata", props.data.count);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{props.data.text}</div>
      {/* Counter here */}
      <Counter count={count} id={id} />
      <button data-testid="task-remove-button">
        <GiTireIronCross />
      </button>
    </li>
  );
};

export default Task;
