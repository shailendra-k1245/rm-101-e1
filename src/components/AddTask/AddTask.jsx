import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const handleClick = () => {};

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleChange} 
      placeholder="Add task..."/>
      <button data-testid="add-task-button" onClick={handleClick}>
        <BsPlusLg/>
      </button>
    </div>
  );
};

export default AddTask;
