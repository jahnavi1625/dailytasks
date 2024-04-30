import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';
import {useLocation} from "react-router-dom";

const ParentComponent = () => {
    // const[state,setState]=useState('');
    // const handleClick=(value)=>{
    //     setState(value);
    // }
    const location=useLocation();
    // console.log(location);
    const[postData,setPostData]=useState(location?.state?.data??[]);
  return (
    <div>
        {/* here {state}
      <ChildComponent handleValue={handleClick}/> */}
      
      {postData}:<h1>no data here</h1>
    </div>
  )
}

export default ParentComponent;
