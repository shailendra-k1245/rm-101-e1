import React from "react";
import { Provider } from "react-redux";
import { TaskApp } from "./components/TaskApp";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskApp />
      </div>
    </Provider>
  );
}

export default App;
