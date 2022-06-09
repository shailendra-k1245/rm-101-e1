import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/action";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputData(e.target.value);
    // console.log(uuidv4());
  };
  const handleClick = () => {
    const payload = {
      id: uuidv4(),
      text: inputData,
      done: false,
      count: 0,
    };
    dispatch(addTask(payload));
  };

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        onChange={handleChange}
        placeholder="Add task..."
      />
      <button data-testid="add-task-button" onClick={handleClick}>
        <BsPlusLg />
      </button>
    </div>
  );
};

export default AddTask;
