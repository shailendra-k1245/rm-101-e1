import React from "react";
import { TaskApp } from "./components/TaskApp";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  return (
    <div>
      {/* Code Here */}
      <TaskApp/>
    </div>
  );
}

export default App;
