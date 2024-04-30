import React,{useState} from "react";

const FormTask = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[add,setAdd]=useState('');
    const[city,setCity]=useState('');
    const[state,setState]=useState('');
    const[zipcode,setZipCode]=useState('');
    const[checkbox,setCheckBox]=useState('');
    const[radio,setRadio]=useState('');
    const[errorMsg,setErrorMsg]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!email && !password && !add && !city && !state && !zipcode && !checkbox && !radio ){
            setErrorMsg("please enter the details");
        }
        else{
            let newMsg=`email is ${email} 
            password is ${password} 
             address is ${add} 
             city is ${city} 
           state is ${state} 
            postalcodde is ${zipcode} 
             checkbox selected is ${checkbox} 
              radio selected is ${radio} `
            setErrorMsg(newMsg);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlForm="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlForm="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            onChange={(event)=>{
                setPassword(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlForm="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          onChange={(event)=>{
            setAdd(event.target.value);
        }}
        />
      </div>
      
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" onChange={(event)=>{
                setCity(event.target.value);
            }} />
        </div>
        <div className="form-group col-md-4">
          <label htmlForm="inputState">State</label>
          <select id="inputState" className="form-control" onClick={(event)=>{
                setState(event.target.value);
            }}>
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlForm="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" onChange={(event)=>{
                setZipCode(event.target.value);
            }} />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" onClick={(event)=>{
                setCheckBox(event.target.value);
            }}/>
          <label class="form-check-label" htmlForm="gridCheck">
            Check me out
          </label>
        </div>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
          onChange={(event)=>{
            setRadio(event.target.value);
        }}
        />
        <label class="form-check-label" htmlForm="exampleRadios1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          onChange={(event)=>{
            setRadio(event.target.value);
        }}
        />
        <label className="form-check-label" htmlForm="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div className="form-check disabled">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          disabled
        />
        <label className="form-check-label" htmlForm="exampleRadios3">
          Disabled radio
        </label>
      </div>
      <button type="submit" className="btn btn-primary" >
        Sign in
      </button>
      {errorMsg && <h1>{errorMsg}</h1>}
    </form>
  );
};

export default FormTask;