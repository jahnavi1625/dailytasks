import React,{useState} from "react";
import PropType from "prop-types"
const ServiceFunc =({name,age})=>{
    const[bgColor,setBgColor]=useState('red');
    const[btnColor,setBtnColor]=useState('red');
    const handleChangeColor=()=>{
        setBgColor(`#${Math.random().toString().slice(-6)}`);
        setBtnColor(`#${Math.random().toString().slice(-6)}`);
    }
    return(
        <div style={{backgroundColor:bgColor}}>
            <h1>Services function</h1>
            <h2>Name:{name} and age:{age}</h2>
            <button style={{backgroundColor:btnColor}}  type="submit" onClick={handleChangeColor}>changeColor</button>
        </div>
    )
}
ServiceFunc.defaultProps={
    name:"sai",
    age:21,
}
ServiceFunc.propTypes={
    name:PropType.string.isRequired,
    age:PropType.number.isRequired,
}
export default ServiceFunc;