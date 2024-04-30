import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChildComponent = (props) => {
  const[state,setState]=useState();
  // const handleClick=(event)=>{
  //   setState(state);
  //        console.log(event)
  //       props.handleValue(event.target.type)
  // }
  const navigate=useNavigate();
  const handleClick=(event)=>{
    event.preventDefault();
    console.log(state);
    navigate("/",{
      state:{
        data:state,
      }
    })
  }
  return (
    <div>
      <h1>i am from child</h1>
      <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}}/>
      <button type="submit" onClick={handleClick}>Click</button>
    </div>
  )
};

export default ChildComponent;
