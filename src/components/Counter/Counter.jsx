import React, { useState } from "react";
import styles from "./counter.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCounter, decCounter } from "../../Redux/action";

const Counter = ({ count, id }) => {
  
  const dispatch = useDispatch();
  // sample value to be replaced
  // let count = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => dispatch(addCounter(id,1))}
      >
        <AiOutlinePlus />
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => decCounter(id,1)}
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
};

export default Counter;
