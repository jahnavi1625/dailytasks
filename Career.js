import React, {  useState } from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";

const Career = () => {
  const[postId,setPostId]=useState('');
  const[data,setData]=useState('');
  const[errorMsg,setErrorMsg]=useState('');
  const handleBackendData = () => {
    
    if(postId){
    axios
      // .get(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
      .get(`https://jsonplaceholder.typicode.com/posts`,{
        params:{
          // _limit:20
          _limit:postId,
        }
      })
      .then((response) => {
        console.log(response.data);
        response.data?.length>1?setData(response.data):setData([response.data]);
        setErrorMsg('');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // else{
  //   setErrorMsg("please give ur input");
  //   setData([]);
  //  }
}
  return (
    <div>
      <h1>List of items</h1>
      <form>
        <input type="text" name="postId" id="postId" value={postId} onChange={(event)=>{setPostId(event.target.value)}}/>
        <Button variant="success" onClick={()=>handleBackendData()}>Fetch</Button>
      </form>
      {
        data.length!==0?(
          <Table striped bordered hover >
            <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          
          data.map(({id,userId,title,body})=>(
            <tr key={id}>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
          ))
        }
        </tbody>
          </Table>
        ):(<h1>{errorMsg}</h1>)
      }
    </div>
  )
}

export default Career;
