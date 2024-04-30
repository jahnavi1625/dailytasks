import React, {  useState } from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   handleBackendData();
  // }, []);//if want initially
  const handleBackendData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.table(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>List of items</h1>
      <Button variant="success" onClick={()=>handleBackendData()}>Fetch</Button>
      {
        data.length!==0?(
          <Table striped bordered hover >
            <thead>
        <tr>
          <th>Id</th>
          <th>Userid</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(({id,userid,title,body})=>(
            <tr key={id}>
            <td>{id}</td>
            <td>{userid}</td>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
          ))
        }
        </tbody>
          </Table>
        ):(<h1>No record found</h1>)
      }
    </div>
  )
};

export default Contact;
