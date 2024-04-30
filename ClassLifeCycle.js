    import React from "react";
class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor ");
        this.state={
            name:"jahnavi"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {name:props.name}  
    // }
    componentDidMount(){
        
        setTimeout(()=>{
           this.setState({
            name:"Narasimha"
           })
        },2000)
    }
    // shouldComponentUpdate(){
    //     return false;
    // }
    handleChangeUser=()=>{
        this.setState({name:"Teja"})
    }
    componentDidUpdate(){//must have an mount after that update
        setTimeout(()=>{
            this.setState({
             name:"Amma"
            })
         },2000)
    }
    componentWillUnmount(){
        alert('component unmout called nmnm');//change here the alert work
    }
    render(){
        console.log("render method");
        return(
         <div>
            <h1>life  cycle of component by {this.state.name}</h1>
         <button type="submit" className="btn btn-danger" onClick={this.handleChangeUser}>change</button>
         </div>
        );
         
    }
}
export default LifeCycle;