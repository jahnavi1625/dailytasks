import React from "react";
import PropType from "prop-types";
class About extends React.Component{
    constructor(){
        super();
        console.log(this);
        this.state={
            color:'red',
            btnColor:'green',
        };
    }   
    handleChangeColor=()=>{
        this.setState({
            color:`#${Math.random().toString().slice(-6)}`,
            btnColor:`#${Math.random().toString().slice(-6)}`
        });
    };

    render(){
        return(
           <div style={{backgroundColor:this.state.color}}>
            <h1>AboutClass</h1>
            <h2>{this.props.name}</h2>
            <button style={{backgroundColor:this.state.btnColor}} type="submit" onClick={this.handleChangeColor}>changeColor</button>

           </div>
        )
    }
}
About.defaultProps={
    name:23,
    age:23,
}
About.propTypes={
    name:PropType.string.isRequired,
    age:PropType.number.isRequired,
}
export default About;