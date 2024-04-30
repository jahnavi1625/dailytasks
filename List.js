import React from 'react';
import { useEffect,useState } from 'react';

const List = ({value}) => {
    const[items,setItems]=useState([]);
    // console.log(value());
    // useEffect(()=>{
    //     console.log("updating...");
    //     setItems(value())
    // },[value])//for call back use Callback

    useEffect(()=>{
        console.log("updating...");
        setItems(value)
    },[value])
  return (
   <ul>
    {
        items?.map((val)=>(
            <li key={val}>{val}</li>
        ))
    }
   </ul>
  )
}

export default List
