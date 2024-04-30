import { legacy_createStore } from "redux";
import { applyMiddleware,compose } from "redux";
// import { counterReducer } from "./reducers/counterReducer";
import { thunk } from "redux-thunk";//if using asynchronous operations use dthis because redux cannot handle asynchronous one
import reducers from "./reducers";
// const Store=legacy_createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//for old one
const Store = legacy_createStore(
  reducers,
//   compose(
    applyMiddleware(thunk),
    // )
);
export default Store;
