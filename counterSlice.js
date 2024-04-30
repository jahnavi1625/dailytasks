import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodoSuccess= (todos) => {
  return {
    type: "FETCH_TODO_SUCCESS",
    payload: todos,
  };
}
export const fetchTodoFailure= (error) => {
  return {
    type: "FETCH_TODO_FAILURE",
    payload: error,
  };
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      //action
      state.counter += 1; //return both action and reducer
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    
    fetchTodos: () => {
      return function (dispatch) {
        axios
          .get("http://localhost:3002/todos")
          .then((res) => {
            if (res.status === 200) {
              dispatch(fetchTodoSuccess(res.data));
            } else {
              dispatch(fetchTodoFailure(res.statusMessage));
            }
          })
          .catch((err) => {
            dispatch(fetchTodoFailure(err.message));
          });
      };
    },
  },
});
export const { increment, decrement, fetchTodos } = counterSlice.actions;
export default counterSlice.reducer;
