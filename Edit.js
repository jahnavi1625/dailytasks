import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const location=useLocation();
    const{id,todo,isCorrect} =location?.state;
    const[updateData,setUpdateData]=useState(todo??"");
    const navigate=useNavigate();
    
    
    const handleUpdate=(event)=>{
        event.preventDefault();
         axios.put(`http://localhost:3002/todos/${id}`,{
      todo:updateData,isCorrect:true,
    }).then((res)=>{
      if(res.status===200){
        console.log(res.updateData);
        
    navigate("/todo");
    }
    }).catch((err)=>{
      console.log(err);
    })
      }
  return (
    <div>
      <form onSubmit={handleUpdate} >
        <input
          type="text"
          value={updateData}
          onChange={(e) => {
            setUpdateData(e.target.value);
          }}
        />
        <Button type="submit" variant="secondary" onClick={handleUpdate} >
          update To Do
        </Button>
      </form>
    </div>
  )
}

export default Edit;

