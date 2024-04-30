import React,{useState,useEffect} from "react";

const ClassWork = () => {
    const[formData,setFormData]=useState({
          firstname:'',
          lastname:'',
          gender:'',
          agreeTerms:false,
    });
    const [isFormFilled,setIsFormFilled]=useState(false);
    const handleChange=(event)=>{
        const {name,value,type,checked}=event.target;
        const newValue=type==="checked"?checked:value;
        setFormData({...formData,[name]:newValue});//update the from data
    }
    const{firstname,lastname,gender,agreeTerms}=formData;
    useEffect(()=>{
        console.log("useEffect")
        setIsFormFilled(firstname && lastname && gender && agreeTerms)
    },[formData]);
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
    }
  return (

      <div>
           <form className="formContainer" onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">FirstName </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={handleChange}
            placeholder="Enter Firstname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">LastName </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="lastname"
            value={lastname}
            onChange={handleChange}
            placeholder="Enter lastname"
          />
        </div>
        <div className="form-group">
          
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender==="male"}
            onChange={handleChange}
            />
            <label htmlFor="name">Male </label>
          </div>
          <div className="form-group">  
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender==="female"}
            onChange={handleChange}
          />
          <label htmlFor="name">Female </label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            name="agreeTerms"
            checked={agreeTerms}
            onChange={handleChange}
          />
          <label htmlFor="pass">Terms and conditions</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          
        >
          SignUp
        </button>
        
      </form>
      <button onClick={()=>alert("hi")}>button</button>
      </div>
      
      );
};

export default ClassWork;
