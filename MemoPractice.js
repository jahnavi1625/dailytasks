import React, { useState } from 'react'
import MemoChild from './MemoChild';
import { Button } from 'react-bootstrap';

const MemoPractice = () => {
const [count,setCount]=useState(0);
 const compute=(count)=>{
    console.log("count");
    return count*2;
 }

  return (
    <div>
      
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
      <MemoChild callback={compute}/>
    </div>
  )
}

export default MemoPractice
