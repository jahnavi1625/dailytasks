import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import "./Todo.css";
// import { useNavigate } from "react-router-dom";

const ToDoList = () => {
  const [newName, setNewName] = useState({ id: null });
  const [data, setData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [newState, setNewState] = useState('');
  const[bgColor,setBgColor]=useState(false);

  // const navigate = useNavigate();

  const fetchTodo = () => {
    axios
      .get("http://localhost:3002/todos")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data) {
      alert("please add");
      return;
    }
    const nweData = {
      todo: data,
      isCorrect: false,
    };
    axios
      .post("http://localhost:3002/todos", nweData)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          setTodoList([...todoList]);
          fetchTodo();
          setData("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3002/todos/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          fetchTodo();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = (id, newState, isCorrect) => {
    // axios.put(`http://localhost:3002/todos/${id}`,{
    //   todo:newName,isCorrect:true
    // }).then((res)=>{
    //   if(res.status===200){
    //     console.log(res.data);
    //     setTodoList(res.data);
    //  fetchTodo();
    // setTodoList(todoList.map(todo=>todo.id===id?{...todo,todo:setNewName(newName)}:todo))
    // }
    // }).catch((err)=>{
    //   console.log(err);
    // })

    setTodoList(
      todoList.map((each) =>
        each.id === id ? { ...each, todo: newState, isCorrect: true } : each
      )
    );
    axios.put(`http://localhost:3002/todos/${id}`,{
      todo:newState,isCorrect:true
    }).then((res)=>{
      if(res.status===200){
    setTodoList(todoList.map(todo=>todo.id===id?{...todo,todo:setNewState(newState)}:todo));
    fetchTodo();
    }
    }).catch((err)=>{
      console.log(err);
    })
    
    // navigate(`/edit/${id}`, {
    //   state: {
    //     id,
    //     todo
    //     isCorrect,
    //   },
    // })
  };

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   // setData(e.target.value);
  // };

  return (
    
    <div className="maindiv">
      <h1 className="heading">ToDoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inp"
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button type="submit" style={{backgroundColor:bgColor?"violet":"greenyellow"}} onClick={()=>setBgColor(!bgColor)} className="btn" variant="secondary">
          Add To Do
        </button>
      </form>
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>ID</th>
            <th>ToDo</th>
            <th>Completed?</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {/* {todoList &&
          todoList.map((i) => (
            <>
              <tbody>
                <tr>
                  <td>{i.id}</td>
                  <td>{i.todo}</td>
                  <td>{i.isCorrect}</td>
                </tr>
              </tbody>
            </>
          ))} */}
        <tbody>
          {todoList.map(({ id, todo, isCorrect }) => {
            console.log(id, todo, isCorrect);
            return (
              <tr key={id} style={{ textAlign: "center" }}>
                <td>{id}</td>
                <td>
                  {id === newName ? (
                    <>
                      <input
                        type="text"
                        value={todo}
                        onChange={(e) => {
                          handleUpdate(id, e.target.value, isCorrect);
                        }}
                      />
                      <button
                        type="submit"
                        value={newState}
                        onClick={(e) => {
                          console.log(e);
                          setNewName(e);
                        }}
                      >
                        OK
                      </button>
                    </>
                  ) : (
                    todo
                  )}
                </td>
                <td>{isCorrect ? "true" : "false"}</td>
                <td>
                  <FaUserEdit size={20} onClick={() => setNewName(id)} />
                </td>
                <td>
                  <MdDelete size={20} className="delete" onClick={() => handleDelete(id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    
  );
};

export default ToDoList;
