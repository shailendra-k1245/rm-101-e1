import React, { useState } from "react";
import styles from "./counter.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  const [count, setCount] = useState(0);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button">
        <AiOutlinePlus />
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button">
        <AiOutlineMinus />
      </button>
    </div>
  );
};

export default Counter;
