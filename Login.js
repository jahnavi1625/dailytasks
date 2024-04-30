import React, { useState,useContext } from "react";
import { NavUserContext } from "../RouteComponent";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = () => {
    const{setIsAuth}=useContext(NavUserContext);
//   const [username, setUserName] = useState("");
const [username, setUserName] = useState(localStorage.getItem('username')??"");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setErrorMsg("please enter name and password");
    }  else {
      setErrorMsg("");
    //   sessionStorage.setItem('username',username);
    localStorage.setItem('username',username);
      setIsAuth(true);
      navigate("/")
    }
  };
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">UserName </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={username}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          placeholder="enter user name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          className="form-control"
          id="pass"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="enter password"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
      {errorMsg && <h1>{errorMsg}</h1>}
    </form>
  );
};
export default Login;
