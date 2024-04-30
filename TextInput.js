import React, { useState } from "react";

const TextInput = (props) => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
    props.handleParentCallBack(event.target.value);
    // props.handleParentCallBack({id:123,name:"dp"});
  };
  return (

      <form>
        {/* <input value={value} type="text" onChange={(event)=>console.log(event.target.value)} placeholder='enter something' /> for parent to child */}
        <input
          value={name}
          type="text"
          onChange={handleChange}
          placeholder="enter something"
        />
      </form>

  );
};

export default TextInput;
