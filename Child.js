import React, { useState } from 'react'

const Child = () => {
    const [name,setName]=useState("");

// const handleClick=()=>{
//     return handleClick;
// }

    console.log("child caled.....")
  return (
    <div>
      <div>Hello</div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <h1>Name:{name}</h1>
    </div>
  )
}

export default Child
