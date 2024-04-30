import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Form,Button, Table } from "react-bootstrap";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[gender,setGender]=useState('');

  useEffect(() => {
    handleBackendData();
  }, []);
  const handleBackendData = () => {
    axios
      .get("http://localhost:3002/patients")
      .then((response) => {
        // console.table(response.data);
        setData(response.data);
        setErrorMsg("");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("please see");
      });
  };
  const handleNewPost = (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      age: age,
      gender: gender,
    };
    axios
      .post("http://localhost:3002/patients", formData)
      .then((res) => {
        console.log(res);
        handleBackendData();
        setName('');
        setAge('');
        setGender('');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete=(id)=>{
  axios.delete(`http://localhost:3002/patients/${id}`).then((res)=>{
    console.log(res);
    handleBackendData();
  }).catch((err)=>{
    console.log(err);
  })
  }
  return (
    <div>
      {/* <form> */}
        {/* <Button type="submit" onClick={handleNewPost}>
          AddNewRecord
        </Button> */}
         {/* </form> */}
        <Form onSubmit={handleNewPost}>
      <Form.Group className="mb-3" controlId="title" value={name} onChange={(e)=>setName(e.target.value)}>
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age" >
        <Form.Label>age</Form.Label>
        <Form.Control type="text" placeholder="enter age" value={gender} onChange={(e)=>setGender(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>gender</Form.Label>
        <Form.Control type="text" placeholder="enter gender" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        add new post
      </Button>
    </Form>
     
      {data.length !== 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, age, gender }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>
                  <Button variant="success" onClick={() => handleDelete(id)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>{errorMsg}</h1>
      )}
    </div>
  );
};

export default AboutUs;
