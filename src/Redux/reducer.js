import {
  ADD_TASK,
  TOGGLE_STATUS,
  DELETE_TASK,
  ADD_COUNTER,
  DEC_COUNTER,
} from "./action";

const initState = {
  todos: [
    {
      id: 1,
      text: "Push up",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pull Up",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Squats",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sprint",
      done: false,
      count: 5,
    },
    {
      id: 5,
      text: "Stairs",
      done: false,
      count: 200,
    },
  ],
};

export const reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...store, todos: [...store.todos, payload] };
    case TOGGLE_STATUS:
      return {
        ...store,
        todos: store.todos.map((el) =>
          el.id === payload ? { ...el, done: !el.done } : el
        ),
      };
    case DELETE_TASK:
      return {
        ...store,
        todos: store.todos.filter((el) => el.id !== payload),
      };
    case ADD_COUNTER:
      return {
        ...store,
        todos: store.todos.map((el) =>
          el.id === payload ? { ...el, count: (prev) => prev + 1 } : el
        ),
      };
    case DEC_COUNTER:
      return {
        ...store,
        todos: store.todos.map((el) =>
          el.id === payload ? { ...el, count: (prev) => prev - 1 } : el
        ),
      };

    default:
      return store;
  }
};
