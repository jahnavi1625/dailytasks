let initialState={
    loading:false,
    todos:[],
    error:"",
}
export const TodoReducer=(state=initialState,action)=>{
    if(action.type==='FETCH_TODO_SUCCESS'){
          return{
           
            todos:action.payload,
            error:""
          }
    }
    else if(action.type==='FETCH_TODO_FAILURE'){
          return{
            error:action.payload,
          todos:[],
          }
    }
    return state;
};