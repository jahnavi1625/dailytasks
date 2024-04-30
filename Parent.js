import React, { useCallback, useMemo, useState } from 'react'
import Child from "./Child";
const Parent = () => {
const [count,setCount]=useState(0);

const handleNum=useCallback(()=>{

},[])

// const getMethod=useMemo(()=><Child/>)
const getMethod=useMemo(()=><Child handleClick={handleNum}/>,[handleNum])
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
      {getMethod}
    </div>
  )
}

export default Parent;
