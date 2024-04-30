import React, { useEffect, useRef, useState } from 'react'

const DayPractice = () => {
//    const [name,setName]=useState("")
//    const count=useRef(0);
   const inputRef=useRef(null);

   
//   useEffect(()=>{
//     count.current+=1;
//   })
  const focusInput=()=>{
    inputRef?.current?.focus();
  }

  return (
    <div>
        {/* <h1>Name: {inputRef?.current?.value} </h1>
      <input type="text" ref={inputRef}/>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <h1>count : {count.current}</h1> */}

<input type="text" ref={inputRef}/>
<button onClick={focusInput}>Click</button>

    </div>
  )
}

export default DayPractice;
