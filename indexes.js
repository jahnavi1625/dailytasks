import axios from "axios";
export const increment=(value)=>{
    return{
        type:"INCREMENT",
        payload:value,
    };
};
export const decrement=(value)=>{
    return{
        type:"DECREMENT",
        payload:value,
    };
};//for old redux

 export const fetchTodoSuccess=(todos)=>{
    return{
        type:"FETCH_TODO_SUCCESS",
        payload:todos,
    }
}

export const fetchTodoFailure=(error)=>{
    return{
        type:"FETCH_TODO_FAILURE",
        payload:error,
    }
}

export const fetchTodos=()=>{
    return function (dispatch) {
        axios.get("http://localhost:3002/todos").then((res)=>{
            if(res.status===200){
              dispatch(fetchTodoSuccess(res.data))
            }else{
             dispatch(fetchTodoFailure(res.statusMessage))
            }
        }).catch((err)=>{
            dispatch(fetchTodoFailure(err.message))
        })
    }
}