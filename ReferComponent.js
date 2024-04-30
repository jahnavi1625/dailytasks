import React, { useEffect } from 'react'
import { useRef,useState } from 'react';

const ReferComponent = () => {
    const[name,setName]=useState("");
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    },[name])
    const inputRef=useRef(null);
    console.log(inputRef)
  return (
    <div>
        <h1>Name : {inputRef?.current?.value}</h1>
      <input type="text" ref={inputRef} />
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <h1>Count:{count.current}</h1>
    </div>
  )
}

export default ReferComponent;
