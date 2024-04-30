import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { TodoReducer } from "./TodoReducer";

export default combineReducers({ 
    counterReducer, //also give tod0s:counterReducer
    TodoReducer 
});
 
