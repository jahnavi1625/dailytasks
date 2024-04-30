import React from "react";
class ClassForm extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            errorMsg:"",
        }
        // this.handleName=this.handleName.bind(this);
    }
    handleName=(event)=>{
        // console.log('here',event.target.value);
        // console.log(this);
      this.setState({
        username:event.target.value,
      })
    };
    handlePassword=(event)=>{
        this.setState({
          password:event.target.value,
        })
      };
      handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("hi")
       
        const{username,password}=this.state;
        if(username==='' || password===''){
            this.setState({
                errorMsg:"please enter name and password",
            })
        }
        else if(username==="admin" && password==="admin" ){
            this.setState({
                errorMsg:`username is ${username} and password is ${password}`
            })
        }
        else{
            this.setState({
                errorMsg:"please enter name and password",
            })
        }
      }

    render(){
        return(
            <div>
                <form className="formContainer" onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">UserName </label>
                    <input type="text" className="form-control" id="name" onChange={this.handleName} placeholder="enter user name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control" id="pass" onChange={this.handlePassword} placeholder="enter password" />
                        </div>
                    <button  type="submit"  className="btn btn-primary" >Login</button>
                    {this.state.errorMsg && <h1>{this.state.errorMsg}</h1>}
                </form>
            </div>
        )
    }
}
export default ClassForm;