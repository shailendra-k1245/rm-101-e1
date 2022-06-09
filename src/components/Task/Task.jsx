import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter/index";
import { GiTireIronCross } from "react-icons/gi";
import { deleteTasks, toggleStatus } from "../../Redux/action";
import { useDispatch } from "react-redux";

const Task = (props) => {
  const count = props.data.count;
  const id = props.data.id;
  const dispatch = useDispatch();

  // NOTE: do not delete `data-testid` key value pair

  const handleClick = () => {
    // console.log("clicked");
    dispatch(deleteTasks(id));
  };

  const handleRadio = () => {
    dispatch(toggleStatus(id))
  };

  return (
    <li data-testid="task" className={styles.task}>
      <input
        type="checkbox"
        data-testid="task-checkbox"
        checked={props.data.done == true ? true : false}
        onChange={handleRadio}
      />
      <div
        data-testid="task-text"
        className={props.data.done == true ? styles.strike : ""}
      >
        {props.data.text}
      </div>
      {/* Counter here */}
      <Counter count={count} id={id} />
      <button data-testid="task-remove-button" onClick={handleClick}>
        <GiTireIronCross />
      </button>
    </li>
  );
};

export default Task;
