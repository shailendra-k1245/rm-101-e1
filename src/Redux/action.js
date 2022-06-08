export const ADD_TASK = "ADD_TASK";
export const ADD_COUNTER = "ADD_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";

export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export const addTask = (data) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const addCounter = (id) => {
  return {
    type: ADD_COUNTER,
    payload: id,
  };
};

export const decCounter = (id) => {
  return {
    type: DEC_COUNTER,
    payload: id,
  };
};

export const toggleStatus = (id) => {
  return {
    type: TOGGLE_STATUS,
    payload: id,
  };
};

export const deleteTasks = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
