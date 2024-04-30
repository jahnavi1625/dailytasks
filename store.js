import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counterSlice";
import { TodoReducer } from "../redux/reducers/TodoReducer";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
// import api from "./middleware/api";

// const customizedMiddleware = getDefaultMiddleware({
//     serializableCheck: false
//   })
const store=configureStore({
    reducer:{
        counterReducer,
        TodoReducer//counterReducer can also gve
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     customizedMiddleware
    // }),
    // middleware: [
    //     ...getDefaultMiddleware(), 
    //     api
    //   ],
})
export default store;