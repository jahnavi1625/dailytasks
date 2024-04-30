import React from 'react';
import TextInput from './TextInput';
// import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ClassWork = () => {
  // const location=useLocation();
  // console.log(location);
  const[name,setName]=useState('');
  const handleValue=(value)=>{
    console.log(value);
   setName(value);
  //  setName(value?.name);
  }
  return (
    // <div>
    //   Home
    //   {location.state.name}
    //   {location.state.password}
    // </div>
    <div>
      <h1>Name from child: {name}</h1>
      <TextInput  handleParentCallBack={handleValue} />
    </div>
  );
};

export default ClassWork;
