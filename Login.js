import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
const Login =()=>{
  const[username,setUserName] = useState('');
  const[password,setPassword] = useState('');
  const[errorMsg,setErrorMsg] = useState('');
  const navigate=useNavigate();
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(username==="" || password===""){
        setErrorMsg("please enter name and password");
    }
    else if(username==="admin" && password==="admin"){
     setErrorMsg(`username is ${username} and password is ${password}`);
    }
    else{
        setErrorMsg("please enter name and password");
        navigate("/",{state:{name:username,password:password}});
    }
  }
    return (
        <form className="formContainer" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">UserName </label>
                    <input type="text" className="form-control" id="name" onChange={(event)=>{setUserName(event.target.value)}} placeholder="enter user name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control" id="pass" onChange={(event)=>{setPassword(event.target.value)}} placeholder="enter password" />
                        </div>
                    <button  type="submit"  className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    {errorMsg && <h1>{errorMsg}</h1>}
                </form>
    )
}
export default Login;
