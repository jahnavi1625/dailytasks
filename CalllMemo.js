import React, { useState } from 'react'
import { useMemo } from 'react';
const CalllMemo = () => {
    const [counter,setCounter]=useState(0);
    const[userName,setUserName]=useState('');
    const factorialLogic=(value)=>{
      let fact=1;
      for(let i=1;i<=value;i++){
        fact*=i;
      }
      return fact;
    }
    // const fact=factorialLogic(counter);//here always called so
    const fact=useMemo(()=>factorialLogic(counter),[counter]);
  return (
    <div>
      <h1>The factorial of {counter} is {fact}</h1>
      <button variant="success" onClick={()=>setCounter(counter+1)}>Increment</button>
      <h1>{counter}</h1>
      <button variant="success" onClick={()=>setCounter(counter-1)}>Decrement</button>
      <br></br>
      <input type="text" placeholder='engter value' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <h1>My name is {userName}</h1>
    </div>
  )
}

export default CalllMemo
