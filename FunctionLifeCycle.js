import React,{useEffect,useState} from "react";
const LifeCycleFunc=()=>{
    const[counter1,setCounter1]=useState(0);
    const[counter2,setCounter2]=useState(0);
    const[input,setInput]=useState('');
    useEffect(()=>{
        console.log("useEffect");
    },[counter1,counter2])
    return (
        <div>
            <div className="d-flex">
            <button type="submit" onClick={()=>setCounter1(counter1+1)}>increment</button>
            <h1>{counter1}</h1>
            <button type="submit" onClick={()=>setCounter1(counter1-1)}>decrement</button>
        </div>
        <div className="d-flex">
        <button type="submit" onClick={()=>setCounter2(counter2+1)}>increment</button>
        <h1>{counter2}</h1>
        <button type="submit" onClick={()=>setCounter2(counter2-1)}>decrement</button>
    </div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
        </div>
    )
}
export default LifeCycleFunc;